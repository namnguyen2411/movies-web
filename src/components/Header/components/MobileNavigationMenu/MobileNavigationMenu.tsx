import { ChevronDown, Star } from 'lucide-react'
import { useEffect, useRef } from 'react'
import { Link } from 'react-router'
import { NAVIGATION_MENU_ITEMS } from '@/components/Header/constants'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'

interface MobileNavigationMenuProps {
  isMobileMenuOpen: boolean
}

const MobileNavigationMenu = ({ isMobileMenuOpen }: MobileNavigationMenuProps) => {
  const headerHeightRef = useRef(0)

  useEffect(() => {
    const header = document.querySelector('header')
    if (header) {
      headerHeightRef.current = header.offsetHeight
    }
  }, [])

  return (
    <>
      {isMobileMenuOpen && (
        <div
          className="animate-in slide-in-from-left z-2.5 fixed left-3 mt-2 min-w-[120px] rounded-md bg-[#3b4987f2] px-1 py-5 duration-300 md:left-4 xl:left-5 2xl:left-10"
          style={{ top: headerHeightRef.current || 80 }}
        >
          <ul className="flex flex-col gap-4 font-semibold">
            {NAVIGATION_MENU_ITEMS.map((item) => {
              if (item.children) {
                return (
                  <DropdownMenu key={item.href}>
                    <DropdownMenuTrigger className="order-1">
                      <li className="hover:text-main-hover hover:bg-main-hover/10 flex cursor-pointer items-center rounded-md py-2 pl-3 text-sm lg:text-base">
                        {item.title}
                        <ChevronDown size={14} className="ml-0.5 stroke-3" />
                      </li>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="start" alignOffset={-4} className="space-y-1.5">
                      {item.children.map((child) => (
                        <DropdownMenuItem key={child.href} className="w-full p-0">
                          <Link to={child.href} className="hover:text-main-hover w-full py-2.5 pl-2">
                            {child.title}
                          </Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                )
              } else {
                return (
                  <li key={item.href} className="rounded-md">
                    <Link
                      to={item.href}
                      className="hover:text-main-hover hover:bg-main-hover/10 flex rounded-md py-2 pl-3 text-sm lg:text-base"
                    >
                      {item.title}
                      {item.href === '/chu-de' && (
                        <Star size={10} className="fill-main-color stroke-main-color ml-0.5 stroke-3" />
                      )}
                    </Link>
                  </li>
                )
              }
            })}
          </ul>
        </div>
      )}
    </>
  )
}
export default MobileNavigationMenu
