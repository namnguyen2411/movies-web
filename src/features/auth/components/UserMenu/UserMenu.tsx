import { UserRound } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Avatar from '@/features/auth/components/Avatar'

const UserMenu = () => {
  const user: boolean = false

  return (
    <>
      {user ? (
        <Avatar />
      ) : (
        <Button className="rounded-full" title="Thành viên">
          <UserRound className="stroke-3" size={20} />
          <span className="hidden xl:inline">Thành viên</span>
        </Button>
      )}
    </>
  )
}
export default UserMenu
