# Akify Web

## Contents

- [1. Overview](#1-overview)
- [2. Core Metrics](#2-core-metrics)
- [3. Performance Optimization](#3-performance-optimization)
- [4. Deep Dives & Architecture](#4-deep-dives--architecture)
  - [4.1. 이미지 최적화 비용 한계와 성능 병목 해결](#41-이미지-최적화-비용-한계와-성능-병목-해결)
  - [4.2. 브라우저 캐시를 활용한 0ms 이미지 노출 및 동적 Preload](#42-브라우저-캐시를-활용한-0ms-이미지-노출-및-동적-preload)
  - [4.3. `<Suspense>` 스트리밍 SSR 파이프라인
](#43-suspense-스트리밍-ssr-파이프라인)
  - [4.4. 백엔드 게스트 토큰 제약 극복을 위한 서버 인메모리 Single-flight 패턴](#44-백엔드-게스트-토큰-제약-극복을-위한-서버-인메모리-single-flight-패턴)
  - [4.5. Server Component First 및 Leaf/Slot Wrapper 컴포넌트 설계](#45-server-component-first-및-leafslot-wrapper-컴포넌트-설계)
  - [4.6. 모바일 앱 전환 및 마케팅 지표 추적](#46-모바일-앱-전환-및-마케팅-지표-추적)
- [5. 프로젝트 아키텍처 및 폴더 구조](#5-프로젝트-아키텍처-및-폴더-구조)

---

## 1. Overview

Akify는 중고 악기와 음향 장비를 거래하는 C2C/B2C 버티컬 플랫폼입니다. 웹 서비스는 검색 유입(SEO) 및 SNS 공유 링크를 통해 유입된 사용자가 상품을 쾌적하게 탐색하고 최종적으로 네이티브 모바일 앱 설치로 이어지도록 돕는 고성능 Read-only 웹 브릿지 역할을 담당합니다.

실시간 채팅, 결제, 거래 체결과 같은 핵심 트랜잭션은 모바일 네이티브 앱에 집중되어 있는 비즈니스 구조상 웹 서비스는 검색 엔진(SEO) 및 SNS 공유 링크를 통해 유입된 신규 사용자가 상품을 빠르게 탐색하고 최종적으로 네이티브 앱으로 이어지도록 돕는 앱 전환 브릿지 역할을 전담합니다.

모바일 저사양 네트워크(3G Fast) 환경에서도 즉각적인 상품 탐색이 가능하도록 웹 코어 바이탈을 극한으로 최적화하고 백엔드의 보안 제약과 인프라 무료 티어 한도를 프론트엔드 엔지니어링으로 해결하는 것을 핵심 과제로 삼았습니다.

---

## 2. Core Metrics

> 측정 기준: WebPageTest 모바일 3G Fast 에뮬레이션 환경 (Download: 1.6Mbps, Latency: 150ms)

| 지표 (Core Vitals) | 최적화 전 | 최적화 후 | 개선 결과 |
| :--- | :---: | :---: | :---: |
| LCP | 49.0s | 2.3s | 95.3% 단축 |
| 전체 페이지 전송량 | 10.37MB | 1.08MB | 89.6% 축소 |
| Speed Index | 26.8s | 4.5s | 83.2% 단축 |
| TBT | 686ms| 456ms | 33.6% 단축 |
| CLS | 0.0006 | 0.0002 | 0% 유지 |
| 상세 페이지 이미지 체감 노출 | 2.4s | 0ms | 캐시된 썸네일 이미지 즉시 주입 |

---

## 3. Performance Optimization

외부 요인을 배제하기 위해 WebPageTest 모바일 3G 환경을 기준으로 병목을 해결했습니다.

| 적용된 핵심 최적화 | LCP | FCP | TBT | Speed Index | JS 번들 | 폰트 용량 | 전체 전송량 | 개선 내용 및 효과 |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :--- |
| 최적화 이전 상태  | 49.0s | 1.9s | 101ms | 26.8s | 998KB | 6.66MB | 10.37MB | 폰트 대역폭 독점 및 미압축 원본 이미지 병목 식별 |
| 로컬 웹 폰트 전환 | 24.2s | 2.1s | 0ms | 15.6s | 1.05MB | 2.00MB | 5.80MB | 외부 구글 폰트 CDN 연결 오버헤드 차단 |
| 서드파티 스크립트 비동기 지연 로딩 | 24.3s | 2.1s | 148ms | 14.7s | 1.05MB | 2.00MB | 5.80MB | GA4, Meta Pixel, 채널톡 스크립트 메인 스레드 점유 해소 |
| Vercel 비용 최적화 | 4.3s | 1.9s | 207ms | 8.8s | 1.05MB | 2.00MB | 3.55MB | 이미지 규격 핏팅 및 캐시 극대화로 이미지 변환 한도 대응 |
| 단일 레이아웃 마이그레이션  | 7.4s | 1.9s | 74ms | 10.0s | 189KB | 2.00MB | 2.70MB | 중복 컴포넌트 마이그레이션으로 메인 JS 번들 81% 축소 |
| 2,350자 가변 서브셋 WOFF2 도입 | 5.4s | 5.4s | 602ms | 5.1s | 189KB | 647KB | 1.33MB | 폰트 전송량 90% 축소 |
| dynamic import 적용 | 4.7s | 2.2s | 683ms | 5.2s | 180KB | 647KB | 1.31MB | 초기 뷰포트 외의 번들 스플리팅 및 DOM 50% 축소 |
| ImageKit CDN 프록시 피벗 | 2.5s | 1.8s | 686ms | 4.9s | 180KB | 647KB | 1.12MB | Vercel 이미지 변환 종속성 탈피 및 LCP 리소스 최적화 |
| Suspense 스트리밍 SSR | 2.3s | 1.8s | 456ms | 4.5s | 181KB | 647KB | 1.08MB | 초기 뷰포트 즉시 스트리밍 및 하이드레이션 부하 분산, TBT 33.6% 단축 |

---

## 4. Deep Dives & Architecture

### 4.1. 이미지 최적화 비용 한계와 성능 병목 해결

#### 배경 및 비용 제약

- 압축되지 않은 고화질 원본 이미지를 그대로 서빙하면 성능에 치명적이고 Vercel 내장 이미지 최적화를 사용하면 **월간 5,000회 변환 한도를 초과하여 이미지가 로드되지 않는 문제**를 겪었습니다.
- 서버리스 함수에서 AVIF 변환을 무턱대고 활성화하면 **CPU 연산량 급증으로 TTFB 지연이 발생하는 성능과 비용의 딜레마**를 경험했습니다.

#### 비용 절감 조치

- `minimumCacheTTL`을 100일로 연장하여 **변환된 이미지의 엣지 캐시를 영속 보존**함으로써 월간 신규 이미지 변환 횟수를 최소화했습니다.
- UI 브레이크포인트에 맞춘 디바이스 규격만 선별하여 **불필요한 해상도별 이미지 중복 변환을 방지**했습니다.

#### 인프라 피벗

- Vercel 이미지 변환 횟수 한계와 추가 과금 위험에서 완전히 벗어나기 위해 **ImageKit CDN 프록시 인프라**로 전면 전환했습니다.
- 커스텀 이미지 로더를 구현하여 서버 연산 부하 없이 CDN 엣지 레벨에서 이미지를 **차세대 고효율 포맷인 AVIF로 자동 변환하여 서빙**하도록 교체했습니다.
- 캐러셀 슬라이더의 1번째 배너에만 `priority={true}`와 `fetchPriority="high"`를 집중 부여하고 **2번째 이후 슬라이드는 오프스크린 리소스로 다운로드 큐에서 격리**했습니다.

#### 성과

- **Vercel 이미지 변환 횟수 한도 종속성 탈피 및 무료 인프라 운영 확보**
- **ImageKit AVIF 도입을 통해 이미지 단계 LCP 4.7s → 2.5s 단축 (46.8% 추가 단축)**

```typescript
// src/shared/lib/image-loader.ts (ImageKit 프록시 커스텀 로더)
import type { ImageLoaderProps } from 'next/image';

const IMAGE_PROXY_URL = 'https://ik.imagekit.io/akify';
const IMAGE_STORAGE_URLS = ['https://storage.googleapis.com/akify-bucket'];

export default function imageLoader({ src, width, quality }: ImageLoaderProps) {
  const matchedUrl = IMAGE_STORAGE_URLS.find((url) => src.includes(url));
  const proxiedUrl = matchedUrl ? src.replace(matchedUrl, IMAGE_PROXY_URL) : src;
  const separator = proxiedUrl.includes('?') ? '&' : '?';

  return `${proxiedUrl}${separator}tr=w-${width},q-${quality || 75},f-avif`;
}
```

---

### 4.2. 브라우저 캐시를 활용한 0ms 이미지 노출 및 동적 Preload

#### 배경 및 사용자 경험 병목

- 메인 페이지 상품 리스트에서 카드를 클릭해 상세 페이지로 진입할 때 상단 슬라이더의 고해상도 이미지를 새로 다운로드하느라 수백 ms 동안 스켈레톤 깜빡임이 발생했습니다.
- 사용자는 리스트 뷰를 탐색하며 **해당 상품의 썸네일 이미지를 다운로드받아 브라우저 캐시에 이미 보유**하고 있었습니다.

#### 해결 전략

- 브라우저 내장 `performance` API를 활용하여 **런타임에 이미지 캐시 보유 여부를 실시간 확인하는 유틸을 구현**했습니다.
- 상세 페이지 마운트 즉시 캐시된 썸네일을 `backgroundImage`로 주입하여 **0ms로 즉각 페인팅**하고 고해상도 원본이 도착하면 그 위에 자연스럽게 교체되도록 구현했습니다.
- 카드 클릭 전 발생하는 호버 및 터치 시작의 유휴 시간을 포착하여 **DPR 맞춤형 상세 이미지를 백그라운드에서 동적 프리로드**하도록 구현했습니다.

#### 성과

- **상세 페이지 이미지 체감 노출 대기 시간 0ms 달성**
- **상세 페이지 LCP 최초 24.1s → 최종 1.9s (92.1% 단축, WPT 87점 달성)**

```tsx
// 1. 브라우저 캐시 실시간 확인 유틸 (src/shared/lib/utils.ts)
export const hasImageCache = (imageUrl: string) => {
  return performance.getEntriesByName(imageUrl).length > 0;
};

// 2. 캐시된 썸네일 즉시 페인팅 (src/shared/ui/image-slider/image-slider-item/image-slider-item-detail-bg.tsx)
export default function ImageSliderItemDetailBg({ src, children }: WithChildren<Props>) {
  const thumbnailUrl = imageLoader({ src, width: getThumbnailImageWidth(), quality: 50 });
  const hasCachedImage = hasImageCache(thumbnailUrl);

  if (!hasCachedImage || !isValidElement<{ style?: React.CSSProperties }>(children)) {
    return <>{children}</>;
  }

  return cloneElement(children, {
    style: {
      backgroundImage: `url("${thumbnailUrl}")`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      ...children.props.style,
    },
  });
}

// 3. 호버/터치 제스처 감지 시 동적 프리로드 (src/entities/merchandise/list/ui/merchandise-card-vertical/merchandise-card-vertical-link.tsx)
const handlePreload = () => {
  const preloadUrl = imageLoader({ src: merchandise.thumbnail, width: getDetailWidth() });
  if (hasImageCache(preloadUrl)) return;

  const img = new Image();
  img.src = preloadUrl;
};

return (
  <Link href={`/merchandise/${merchandise.id}`} onMouseEnter={handlePreload} onTouchStart={handlePreload}>
    {children}
  </Link>
);
```

---

### 4.3. `<Suspense>` 스트리밍 SSR 파이프라인

#### 배경 및 기존 SSR의 한계

- 기존 메인 페이지는 상단 Hero 배너와 하단 상품 리스트를 최상위 레벨에서 `Promise.all`로 묶어 서버 사이드 렌더링을 수행했습니다.
- 하단 상품 목록을 조회하는 백엔드 REST API 응답이 지연되면 **사용자가 가장 먼저 보아야 할 상단 Hero 배너와 메인 레이아웃 셸까지 첫 번째 HTML 바이트 전송이 완전히 블로킹**되는 병목이 발생했습니다.
- 전체 HTML이 한꺼번에 도달하며 클라이언트가 거대한 컴포넌트 트리를 동시에 하이드레이션해야 해 **TBT가 686ms까지 급증**했습니다.

#### 해결 전략

- 상단 Hero 배너와 레이아웃 셸은 서버에서 준비되는 즉시 **1차 HTML 청크로 스트리밍 전송**했습니다.
- 상위 페이지의 데이터 패칭 책임을 **하위 비동기 서버 컴포넌트 내부로 위임**했습니다.
- 하단 상품 섹션은 `<Suspense>`로 래핑하여 데이터 준비 완료 시 **후속 인라인 청크로 점진적 교체 전송**되도록 전환했습니다.

#### 성과

- **TBT 686ms → 456ms (33.6% 감축)**
- **메인 LCP 최종 2.3s 달성**

```
[React 19 스트리밍 파이프라인 흐름]

클라이언트 요청 ──▶ [Next.js Server]
                          │
                          ├─ 1차 청크: Hero 배너 & 헤더 즉시 전송 (체감 0ms 노출)
                          │
                          └─ 2차 청크: 백엔드 API 완료 시 상품 리스트 인라인 스왑 (스켈레톤 교체)
```

```tsx
// src/widgets/merchandise/list/async-explore-section.tsx (비동기 RSC)
export default async function AsyncExploreSection() {
  const merchandiseListData = await fetchMerchandiseListData({
    searchParams: { page: 1, size: 16 },
  });

  return <ExploreSection initialData={merchandiseListData} />;
}

// src/app/page.tsx (메인 페이지 스트리밍 구성)
export default function HomePage() {
  return (
    <main>
      <HeroBannerSection />
      <Suspense fallback={<ExploreSectionSkeleton />}>
        <AsyncExploreSection />
      </Suspense>
    </main>
  );
}
```

---

### 4.4. 백엔드 게스트 토큰 제약 극복을 위한 서버 인메모리 Single-flight 패턴

#### 배경 및 기술적 딜레마

- 아키파이 웹은 비회원 대상의 Read-only 플랫폼이지만 백엔드 아키텍처 제약으로 인해 공개 조회 API를 포함한 전 엔드포인트에 인증 헤더가 강제되어 있었습니다.
- 개별 서버 컴포넌트의 요청에서 쿠키를 직접 읽어 토큰을 주입하면 **해당 라우트 전체가 서버 연산이 실행되는 Dynamic Rendering으로 강제되어 정적 최적화가 불가능한** 치명적 성능 저하가 발생했습니다.

#### 해결 전략

- **정적 렌더링 최적화 상태를 온전히 보존할 수 있도록** Node.js 서버 런타임 프로세스 자체가 인메모리에서 게스트 토큰을 관리하도록 설계했습니다.
- **Single-flight(동시 요청 중복 제거)** 패턴을 적용하여 서버 런타임 환경에서 동시 다발적으로 API 요청이 발생하더라도 토큰 발급 API는 최초 단 1회만 호출되고 모든 요청이 동일한 Promise를 공유하도록 구현했습니다.

#### 성과

- 백엔드 인증 헤더 강제 상태에서도 **서버 컴포넌트의 Dynamic Rendering 강제 전환을 방지하여 정적 최적화 서빙 유지**
- **Single-flight 동시성 제어를 통해 다중 컴포넌트 동시 마운트 시 발생하는 토큰 중복 발급 요청 0건 차단 및 네트워크 병목 방지**

```
[인메모리 Single-flight 토큰 매니저 아키텍처]

API Call 1 ──┐
API Call 2 ──┼──▶ Axios Request Interceptor ──▶ getAnonToken()
API Call 3 ──┘                                        │
                                                      ├─ 유효 토큰 존재 ──▶ 캐시된 토큰 즉시 반환 (0ms)
                                                      └─ 만료/부재 시
                                                             │
                                                             ▼ pendingPromise 검사
                                                      ├─ 진행 중 Promise 있음 ──▶ 기존 Promise 구독 (중복 호출 차단)
                                                      └─ 진행 중 Promise 없음 ──▶ 백엔드 발급 API 단 1회 호출
```

```typescript
// src/features/auth/lib/token.ts
const createTokenManager = () => {
  const state = {
    value: null as string | null,
    expiresAt: 0,
    pendingPromise: null as Promise<string | null> | null,
  };

  return async (forceRefresh = false): Promise<string | null> => {
    const now = Date.now();
    if (!forceRefresh && state.value && now < state.expiresAt) {
      return state.value;
    }

    if (state.pendingPromise) {
      return state.pendingPromise;
    }

    state.pendingPromise = (async () => {
      try {
        const token = await issueAnonToken(SERVER_WORKER_UUID);
        state.value = token;
        state.expiresAt = now + 4 * 60 * 1000;
        return state.value;
      } finally {
        state.pendingPromise = null;
      }
    })();

    return state.pendingPromise;
  };
};

export const getAnonToken = createTokenManager();
```

---

### 4.5. Server Component First 및 Leaf/Slot Wrapper 컴포넌트 설계

- 모든 컴포넌트를 서버 컴포넌트로 우선 설계하고 클라이언트 컴포넌트는 **Leaf, Slot Wrapper 역할로 엄격히 제한**했습니다.
- 세션 스토리지의 UTM 파라미터를 읽는 `ImageSliderUtmLink`를 Leaf로 배치하고 `useSyncExternalStore`를 적용해 **SSR과 클라이언트 간 하이드레이션 불일치를 원천 차단**했습니다.
- 스크롤 감지가 필요한 헤더 전체를 `'use client'`로 오염시키는 대신 `HeaderScrollController` 래퍼에 내부 UI를 `children`으로 주입하여 **순수 서버 컴포넌트 성격과 0KB 번들을 온전히 보존**했습니다.
- 스크롤 시 React 컴포넌트를 리렌더링하지 않고 `data-scrolled` 속성 1개만 토글하는 방식으로 **VDOM 리렌더링 부하 없이 브라우저 CSS 엔진(GPU 가속)에 애니메이션을 위임**했습니다.
- 동적 인터랙션 상태를 Slot Wrapper로 캡슐화하여 **하위 UI 트리의 순수 서버 컴포넌트(RSC) 경계를 온전히 보존하고 불필요한 VDOM 리렌더링을 차단**했습니다.
```markdown
HeroBanner (Server Component) ─── 비동기 데이터 패칭 (0KB JS)
  │
  └─► ImageSliderController ('use client' | Wrapper)
        │ - Embla 터치/드래그 제스처 이벤트만 격리
        │ - children 슬롯을 받아 하위 트리의 RSC 경계 보존
        │
        └─► ImageSliderList (Server Component 슬롯 주입)
              │
              └─► ImageSliderItem (Server Component)
                    │
                    └─► ImageSliderUtmLink ('use client' | Leaf)
                          - useSyncExternalStore로 브라우저 UTM 파라미터 구독
                          - 서버(기본 URL) ↔ 클라이언트(동기화 URL) 분기로 Hydration 오류 차단
```

```tsx
// 1. Leaf | useSyncExternalStore로 하이드레이션 오류 없는 브라우저 스토리지 구독
// src/entities/banner/ui/image-slider-utm-link.tsx
'use client';

export default function ImageSliderUtmLink({ href, children }: WithChildren<Props>) {
  const resolvedHref = useSyncExternalStore(
    () => () => {},
    () => resolveHref(href), // Client: sessionStorage UTM 파라미터 조합
    () => href,              // Server: 기본 href 반환 (Hydration 불일치 방지)
  );

  return (
    <Link href={resolvedHref} target="_blank" rel="noopener noreferrer">
      {children}
    </Link>
  );
}
```

```markdown
Header (Server Component) ─── 공통 레이아웃 구조 (0KB JS)
  │
  └─► HeaderScrollController ('use client' | Wrapper)
        │ - 스크롤 감지 후 data-scrolled DOM 속성만 1개 토글
        │ - VDOM 리렌더링 없이 순수 CSS 엔진(GPU 가속)에 애니메이션 위임
        │
        └─► HeaderContent (Server Component 슬롯 주입)
              │ - 로고, 네비게이션, 검색창 레이아웃 (0KB JS 유지)
              │
              └─► MobileSearchButton ('use client' | Leaf)
                    - 모달 오픈 onClick 이벤트만 최말단에서 담당
```

```tsx
// 2. Wrapper | children 슬롯 주입 및 DOM 속성 토글로 순수 CSS 엔진에 애니메이션 위임
// src/app/layout/header/header-scroll-controller.tsx
'use client';

export default function HeaderScrollController({ children }: { children: React.ReactNode }) {
  const [isScrolled, setIsScrolled] = useState(false);

  // ... 스크롤 감지 로직

  return (
    <div className="header-scroll-group" data-scrolled={isScrolled}>
      {children}
    </div>
  );
}
```

---

### 4.6. 모바일 앱 전환 및 마케팅 지표 추적
- 외부 인앱 브라우저로 유입된 사용자의 리텐션과 전환율을 개선하기 위해 User-Agent를 감지하여 **시스템 기본 브라우저로 강제 우회시키는 외부 탈출 브릿지를 구축**했습니다.
- 모바일 환경에서는 OS별 스토어/앱 딥링크를 실행하고 데스크톱 환경에서는 QR 모달을 연동하여 **모바일 앱 설치 전환율을 극대화**했습니다.
- 최초 유입 시점의 UTM 파라미터를 브라우저 세션 스토리지에 안전하게 보관하여 **페이지 전환 전반에 걸쳐 유입 채널 데이터를 GA4 및 Meta Pixel로 유실 없이 전달**했습니다.


---

## 5. 프로젝트 아키텍처 및 폴더 구조

Next.js App Router의 파일 시스템 라우팅 특성을 수용하면서도 대규모 비즈니스 로직의 관심사 분리와 결합도 제어를 위해 **루트 라우팅 레이어(`app/`)와 Feature-Sliced Design 기반의 비즈니스 레이어(`src/`)를 명확히 분리**했습니다.

```
akify-web/
├── app/                                  - Next.js App Router
│   ├── layout.tsx                        - 글로벌 레이아웃 (HTML 구조, 폰트 주입, Header/Footer)
│   ├── page.tsx                          - 메인 라우트 (src/views/main 위임)
│   ├── merchandise/                      - 상품 도메인 라우트
│   │   └── [id]/page.tsx                 - 상품 상세 라우트 (SSG, Product Schema JSON-LD 구조화 데이터, 메타데이터)
│   ├── search/                           - 검색 라우트
│   │   └── page.tsx                      - 검색 결과 라우트 (-> src/views/search 위임)
│   ├── install/                          - 앱 설치 및 전환 라우트
│   │   └── route.ts                      - 접속 환경 기반 모바일 앱 / 웹 리다이렉트 Route Handler
│   ├── @modal/                           - Parallel Route (모달 오버레이 슬롯)
│   │   └── (.)install/page.tsx           - Intercepting Route (데스크톱 접속 시 QR 설치 모달 가로채기)
│   └── [...not-found]/page.tsx           - 정적 Soft 404 캐치올 라우트 (noindex 메타데이터로 SEO 크롤링 방어)
│
├── src/                                  - Feature Sliced Design 아키텍처 레이어
│   ├── app/                              - App Slice: 전역 레이아웃 셸, 폰트, 스타일, 마케팅 분석 스크립트, 미들웨어
│   │   ├── layout/                       - 공통 헤더/푸터 및 레이아웃 셸
│   │   ├── style/                        - Pretendard, Poppins 가변 서브셋 폰트 및 글로벌 CSS
│   │   ├── analytics/                    - GA4, Meta Pixel, UTM 파라미터 캡처
│   │   └── middlewares/                  - 인앱 브라우저 감지 및 브라우저 우회
│   │
│   ├── views/                            - Views Slice: 라우트와 1:1 매핑되는 완성형 페이지
│   │   ├── main/                         - 메인 탐색 페이지
│   │   ├── merchandise-detail/           - 상품 상세 정보 및 거래 안내 페이지
│   │   └── search/                       - 검색 결과 및 필터링 페이지
│   │
│   ├── widgets/                          - Widgets Slice: 독립적으로 완결된 복합 도메인 UI 블록
│   │   └── merchandise/                  - 상품 도메인 복합 위젯
│   │       ├── list/                     - 상품 칩, 스트리밍 상품 리스트 그리드, 무한 스크롤, 스켈레톤
│   │       └── detail/                   - 단일 템플릿 상세 레이아웃, 스펙/가격 정보, 판매자 프로필, 거래 상태 패널
│   │
│   ├── features/                         - Features Slice: 사용자 인터랙션 및 비즈니스 액션
│   │   ├── auth/                         - Anon 세션 인증 및 서버 인메모리 Single-flight 토큰 관리
│   │   ├── install/                      - 네이티브 앱 딥링크 호출, OS별 스토어 분기, 데스크톱 QR 다운로드 인터랙션
│   │   ├── search/                       - 실시간 검색어 입력 처리 및 검색 쿼리 파라미터 동기화
│   │   └── share/                        - Web Share API 기반 모바일 네이티브 공유 및 URL 클립보드 복사
│   │
│   ├── entities/                         - Entities Slice: 비즈니스 도메인 모델, 데이터 조회 및 도메인 단위 UI
│   │   ├── merchandise/                  - 상품 도메인 (카드 UI, 상세 모델 정보, 상품 목록/상세 API)
│   │   ├── banner/                       - 배너 도메인 (Hero 배너 UI, UTM 파라미터 바인딩 링크)
│   │   ├── analytics/                    - 유입 경로(UTM) 추적 및 앱 전환 브릿지 연동
│   │   └── seo/                          - 검색 엔진 최적화 및 메타데이터 생성 모델
│   │
│   └── shared/                           - Shared Slice: 특정 도메인에 종속되지 않는 공통 모듈
│       ├── assets/                       - 정적 리소스 에셋(WOFF2 폰트)
│       ├── config/                       - 이미지 사이즈
│       ├── lib/                          - HTTP 클라이언트, ImageKit 커스텀 로더, 인메모리 TTL 캐시, Soft-404 유틸
│       ├── tokens/                       - Panda CSS 디자인 시스템 토큰
│       └── ui/                           - 슬롯 기반 이미지 슬라이더, 모달, 토스트, 버튼 등 공통 UI 컴포넌트
│
└── styled-system/                        - Panda CSS 컴파일 타임 생성 스타일 시스템
```
