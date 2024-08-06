export interface IAsideWithVideoProps {
  videoUrl: string
  title?: string
  description?: string
}

export const AsideWithVideo: React.FC<IAsideWithVideoProps> = ({ videoUrl, title, description }) => {
  return (
    <aside className="hidden w-[280px] h-[75vh] sticky top-28 left-0 lg:flex flex-col gap-6 rounded-lg overflow-hidden bg-card">
      <video className="w-full h-full object-cover" src={videoUrl} muted autoPlay loop></video>
      <div className="absolute top-0 left-0 w-full h-full grid grid-rows-[1fr_auto] justify-between bg-background/50 p-4">
        <h2 className="text-2xl text-balance mb-4">{title}</h2>
        {description && (
          <div className="flex flex-col items-center justify-center gap-4 p-4 bg-primary/5 border border-primary/40 rounded-lg backdrop-blur-2xl">
            <p className="text-sm text-primary-50/75 text-center">{description}</p>
          </div>
        )}
      </div>
    </aside>
  )
}
