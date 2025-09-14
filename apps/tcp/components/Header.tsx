import { ExternalLink, ChevronDown, Home, Calendar, Target, Archive } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";

interface HeaderProps {
  activeView: string;
  onViewChange: (view: string) => void;
}

const menuItems = [
  { id: "dashboard", title: "Dashboard", icon: Home },
  { id: "calendar", title: "Calendar", icon: Calendar },
  { id: "opportunities", title: "Opportunities", icon: Target },
  { id: "archives", title: "Archives", icon: Archive },
];

export function Header({ activeView, onViewChange }: HeaderProps) {
  const getCurrentViewTitle = () => {
    const currentItem = menuItems.find(item => item.id === activeView);
    return currentItem ? currentItem.title : "Dashboard";
  };
  return (
    <header className="h-16 bg-transparent backdrop-blur-sm border-b-0 shadow-sm flex items-center justify-between px-6 relative z-20">
      {/* Logo */}
      <div className="flex items-center">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-[#F7F7F7] border border-[#3D3D3D]/20 rounded flex items-center justify-center">
            <span className="text-[#3D3D3D] font-bold text-sm">T</span>
          </div>
          <div>
            <h1 className="text-[#3D3D3D] font-bold text-lg tracking-[-0.04em] leading-[0.99em]">TCP</h1>
            <p className="text-[#3D3D3D]/70 text-xs tracking-[-0.01em] leading-[1.2em]">by Triops Technologies</p>
          </div>
        </div>
      </div>

      {/* Navigation and More about Triops */}
      <div className="flex items-center gap-6">
        {/* Navigation Dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger className="flex items-center gap-2 text-[#3D3D3D] hover:text-[#889870] transition-colors duration-200 text-sm font-normal tracking-[-0.04em] leading-[0.99em] px-3 py-2 rounded-md border-none bg-transparent cursor-pointer outline-none">
            {getCurrentViewTitle()}
            <ChevronDown className="w-4 h-4" />
          </DropdownMenuTrigger>
          <DropdownMenuContent 
            align="end" 
            className="bg-[#F7F7F7] border-[#EDEDED] shadow-lg"
          >
            {menuItems.map((item) => (
              <DropdownMenuItem
                key={item.id}
                onClick={() => onViewChange(item.id)}
                className={`
                  flex items-center gap-3 px-4 py-2 cursor-pointer
                  hover:bg-[#889870] hover:text-[#EDEDED] transition-colors
                  ${activeView === item.id ? 'bg-[#F7F7F7] text-[#3D3D3D] border border-[#3D3D3D]/20' : 'text-[#3D3D3D]'}
                `}
              >
                <item.icon className="w-4 h-4" />
                <span className="font-normal tracking-[-0.04em] leading-[0.99em]">
                  {item.title}
                </span>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        {/* More about Triops link */}
        <a
          href="#"
          className="flex items-center gap-2 text-[#3D3D3D] hover:text-[#889870] transition-colors duration-200 text-sm font-normal tracking-[-0.04em] leading-[0.99em]"
        >
          More about Triops
          <ExternalLink className="w-4 h-4" />
        </a>
      </div>
    </header>
  );
}