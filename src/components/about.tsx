"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Download, Calendar, MapPin, GraduationCap } from "lucide-react";

const timeline = [
  {
    year: "2024",
    title: "AI 에이전트 개발 전문가",
    description: "LLM 기반 AI 에이전트 개발 및 머신러닝/딥러닝 강의",
    company: "프리랜서",
  },
  {
    year: "2023",
    title: "풀스택 개발 교육",
    description: "백엔드/프론트엔드 개발 강의 및 자료구조/알고리즘 교육",
    company: "교육기관",
  },
  {
    year: "2022",
    title: "딥러닝 연구 및 개발",
    description: "딥러닝 모델 개발 및 AI 솔루션 구현",
    company: "기업",
  },
];

const stats = [
  { label: "강의 경력", value: "3+년" },
  { label: "프로젝트 완료", value: "50+" },
  { label: "수강생", value: "500+" },
  { label: "기술 스택", value: "20+" },
];

function ResumeDownloadButton() {
  const handleDownload = () => {
    // 실제 이력서 파일이 있다면 해당 경로로 수정
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = '신제용_이력서.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Button onClick={handleDownload} className="w-full">
      <Download className="mr-2 h-4 w-4" />
      이력서 다운로드
    </Button>
  );
}

export function About() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">소개</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            AI 기술의 발전과 함께 성장하는 개발자로서, 
            실무 경험과 교육 경험을 바탕으로 최고의 가치를 제공합니다.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Profile Card */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader className="text-center">
                <Avatar className="w-32 h-32 mx-auto mb-4">
                  <AvatarImage src="/placeholder-avatar.jpg" alt="신제용" />
                  <AvatarFallback className="text-2xl">신제용</AvatarFallback>
                </Avatar>
                <CardTitle className="text-2xl">신제용</CardTitle>
                <p className="text-muted-foreground">AI 개발자 & 프리랜서 강사</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">대한민국</span>
                </div>
                <div className="flex items-center space-x-2">
                  <GraduationCap className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">컴퓨터공학 전공</span>
                </div>
                <Separator />
                <ResumeDownloadButton />
              </CardContent>
            </Card>
          </div>

          {/* Timeline */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Calendar className="mr-2 h-5 w-5" />
                  경력 타임라인
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {timeline.map((item, index) => (
                    <div key={index} className="flex space-x-4">
                      <div className="flex flex-col items-center">
                        <div className="w-3 h-3 bg-primary rounded-full"></div>
                        {index < timeline.length - 1 && (
                          <div className="w-0.5 h-16 bg-border mt-2"></div>
                        )}
                      </div>
                      <div className="flex-1 pb-6">
                        <div className="flex items-center space-x-2 mb-2">
                          <Badge variant="secondary">{item.year}</Badge>
                          <span className="text-sm text-muted-foreground">{item.company}</span>
                        </div>
                        <h3 className="font-semibold mb-1">{item.title}</h3>
                        <p className="text-muted-foreground text-sm">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index}>
              <CardContent className="text-center py-6">
                <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
} 