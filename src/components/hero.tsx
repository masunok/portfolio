"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronDown, Download, Mail } from "lucide-react";
import Link from "next/link";

const skills = ["딥러닝", "LLM", "풀스택", "자료구조", "바이브코딩"];

export function Hero() {
  const [currentSkill, setCurrentSkill] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSkill((prev) => (prev + 1) % skills.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              신제용
            </h1>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-muted-foreground">
              AI 개발자 & 프리랜서 강사
            </h2>
          </div>

          {/* Skills Slider */}
          <div className="flex justify-center">
            <div className="flex flex-wrap gap-2 justify-center max-w-2xl">
              {skills.map((skill, index) => (
                <Badge
                  key={skill}
                  variant={index === currentSkill ? "default" : "secondary"}
                  className={`text-sm md:text-base px-3 py-1 transition-all duration-500 ${
                    index === currentSkill
                      ? "scale-110 bg-primary text-primary-foreground"
                      : "scale-100"
                  }`}
                >
                  #{skill}
                </Badge>
              ))}
            </div>
          </div>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            딥러닝 및 LLM 기반 AI 에이전트 개발 전문가로서, 
            머신러닝/딥러닝 강의와 백엔드/프론트엔드 개발 교육을 통해 
            기술의 미래를 만들어가고 있습니다.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button asChild size="lg" className="text-lg px-8 py-6">
              <Link href="#contact">
                <Mail className="mr-2 h-5 w-5" />
                연락하기
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6">
              <Link href="#about">
                더 알아보기
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Link href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
          <ChevronDown className="h-6 w-6" />
        </Link>
      </div>
    </section>
  );
} 