import Link from "next/link";
import { Github, Linkedin, MessageSquare } from "lucide-react";

const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/yourusername",
    icon: Github,
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/yourusername",
    icon: Linkedin,
  },
  {
    name: "Velog",
    url: "https://velog.io/@yourusername",
    icon: MessageSquare,
  },
];

export function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">개발자</h3>
            <p className="text-muted-foreground text-sm">
              AI 개발자 & 프리랜서 강사로서 최고의 가치를 제공합니다.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold">바로가기</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#home" className="text-muted-foreground hover:text-foreground transition-colors">
                  홈
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
                  소개
                </Link>
              </li>
              <li>
                <Link href="#techstack" className="text-muted-foreground hover:text-foreground transition-colors">
                  기술스택
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
                  연락처
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-semibold">서비스</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>AI 에이전트 개발</li>
              <li>머신러닝/딥러닝 강의</li>
              <li>웹 개발 교육</li>
              <li>알고리즘 문제해결</li>
              <li>프로젝트 컨설팅</li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © 2024 개발자. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
} 