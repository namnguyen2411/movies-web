import { Avatar as AvatarUI, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

const Avatar = () => {
  return (
    <AvatarUI className="size-10 border border-white">
      <AvatarImage src="https://github.com/shadcn.png" />
      <AvatarFallback>Na</AvatarFallback>
    </AvatarUI>
  )
}
export default Avatar
