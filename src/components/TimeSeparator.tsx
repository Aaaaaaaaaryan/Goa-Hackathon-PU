interface TimeSeparatorProps {
  isFullscreen?: boolean;
}

export default function TimeSeparator({ isFullscreen = false }: TimeSeparatorProps) {
  return (
    <div className={`flex flex-col justify-center pointer-events-none pb-0 px-0.5 sm:px-0 ${isFullscreen ? 'h-24 sm:h-32 md:h-48 lg:h-[20rem]' : 'h-14 sm:h-20 md:h-28'}`}>
      <span className={`font-anton text-white/30 leading-none ${isFullscreen ? 'text-3xl sm:text-6xl md:text-8xl lg:text-[10rem]' : 'text-xl sm:text-4xl md:text-5xl'}`}>
        :
      </span>
    </div>
  );
}
