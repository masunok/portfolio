"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Github } from "lucide-react";

const socialLinks = [
  {
    name: "GitHub",
    url: "https://www.github.com/masunok/",
    icon: Github,
    color: "hover:text-gray-900 dark:hover:text-white"
  }
];

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-muted/30 w-full">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">연락처</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            프로젝트 협업, 강의 의뢰, 또는 궁금한 점이 있으시면 언제든 이메일 또는 GitHub로 연락주세요.
          </p>
        </div>

        <div className="flex flex-col items-center gap-8">
          {/* Contact Info */}
          <Card className="w-full max-w-md">
            <CardHeader>
              <CardTitle>연락 정보</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-muted-foreground" />
                <div>
                  <p className="font-medium">이메일</p>
                  <p className="text-sm text-muted-foreground">soma@kcc.co.kr</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="w-full max-w-md">
            <CardHeader>
              <CardTitle>소셜 미디어</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex justify-center space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 rounded-lg border hover:bg-muted transition-colors ${social.color}`}
                    aria-label={social.name}
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="w-full max-w-md">
            <CardHeader>
              <CardTitle>업무 영역</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2 justify-center">
                <Badge variant="secondary">AI 에이전트 개발</Badge>
                <Badge variant="secondary">머신러닝 강의</Badge>
                <Badge variant="secondary">웹 개발</Badge>
                <Badge variant="secondary">알고리즘 교육</Badge>
                <Badge variant="secondary">프로젝트 컨설팅</Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
} 