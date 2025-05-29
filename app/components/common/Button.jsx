import { ArrowRight } from "lucide-react";

export default function Button({
  text,
  icon: Icon = ArrowRight,
  onClick,
}) {
  return (
    <button
      onClick={onClick}
      className="bg-[#FF8800] text-white px-6 py-3 rounded-md font-semibold text-sm md:text-base flex items-center justify-between gap-2 hover:opacity-90 transition">
      <span>{text}</span>
      <Icon className="w-4 h-4" />
    </button>
  );
}
