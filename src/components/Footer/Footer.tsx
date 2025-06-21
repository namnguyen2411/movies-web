import { Facebook, Twitter, Instagram, Youtube, Twitch } from 'lucide-react'
import { Link } from 'react-router'

const Footer = () => {
  const socialIcons = [
    { icon: <Facebook size={20} /> },
    { icon: <Twitter size={20} /> },
    { icon: <Instagram size={20} /> },
    { icon: <Youtube size={20} /> },
    { icon: <Twitch size={20} /> }
  ]

  return (
    <footer className="bg-footer-bg py-8 text-center">
      <div className="container pt-0">
        {/* Logo */}
        <Link to="/" className="mx-auto flex w-fit flex-col items-center">
          <img src="/logo.png" alt="Logo" className="w-32" />
        </Link>
        {/* Social Icons */}
        <div className="mt-8 flex items-center justify-center gap-5">
          {socialIcons.map((item, index) => (
            <div
              key={index}
              className="hover:bg-main-color/60 flex h-10 w-10 items-center justify-center rounded-full bg-gray-700"
            >
              {item.icon}
            </div>
          ))}
        </div>
        {/* Fake Links */}
        <div className="mt-6 flex cursor-pointer flex-wrap justify-center gap-4 text-sm font-medium sm:gap-6">
          <div className="hover:text-main-text">Hỏi-Đáp</div>
          <div className="hover:text-main-text">Chính sách bảo mật</div>
          <div className="hover:text-main-text">Điều khoản sử dụng</div>
          <div className="hover:text-main-text">Giới thiệu</div>
          <div className="hover:text-main-text">Liên hệ</div>
        </div>
        {/* Description */}
        <p className="text-base-text mx-auto mt-6 max-w-2xl text-sm">
          PopcornFlix - Trang xem phim online chất lượng cao miễn phí Vietsub, thuyết minh, lồng tiếng chất lượng cao.
          Kho phim mới không lỡ, phim chiếu rạp, phim bộ, phim lẻ từ nhiều quốc gia như Việt Nam, Hàn Quốc, Trung Quốc,
          Thái Lan, Nhật Bản, Âu Mỹ... đa dạng thể loại. Khám phá nền tảng xem phim hay nhất 2025.
        </p>
        {/* Copyright */}
        <p className="text-base-text mt-5 text-sm">© 2025 PopcornFlix</p>
      </div>
    </footer>
  )
}

export default Footer
