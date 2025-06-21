import { ChevronDown } from 'lucide-react'
import { Link } from 'react-router'
import { NAVIGATION_MENU_ITEMS } from '@/components/Header/constants'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'

const DesktopNavigationMenu = () => {
  return (
    <ul className="flex items-center gap-10 text-sm font-semibold 2xl:gap-14 2xl:text-base">
      {NAVIGATION_MENU_ITEMS.map((item) => {
        if (item.children) {
          return (
            <DropdownMenu key={item.href}>
              <DropdownMenuTrigger asChild>
                <li className="hover:text-main-hover flex cursor-pointer items-center py-2">
                  {item.title}
                  <ChevronDown size={14} className="ml-0.5 stroke-3" />
                </li>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="space-y-1.5">
                {item.children.map((child) => (
                  <DropdownMenuItem key={child.href} className="w-full p-0">
                    <Link to={child.href} className="hover:text-main-hover w-full py-3 pl-2">
                      {child.title}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          )
        } else {
          return (
            <li key={item.href} className="hover:text-main-hover">
              <Link to={item.href} className="py-2">
                {item.title}
              </Link>
            </li>
          )
        }
      })}
    </ul>
  )
}
export default DesktopNavigationMenu
