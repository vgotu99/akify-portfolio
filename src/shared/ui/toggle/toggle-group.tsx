import ToggleLabel from '@/src/shared/ui/toggle/toggle-label';
import ToggleThumb from '@/src/shared/ui/toggle/toggle-thumb';
import ToggleTrack from '@/src/shared/ui/toggle/toggle-track';

interface ToggleGroupProps {
  isToggleOn: boolean;
  handleToggle: () => void;
  value: string;
}

export default function ToggleGroup({
  isToggleOn,
  handleToggle,
  value,
}: ToggleGroupProps) {
  return (
    <ToggleTrack handleToggle={handleToggle}>
      <ToggleThumb isToggleOn={isToggleOn} />
      <ToggleLabel value={value} />
    </ToggleTrack>
  );
}
