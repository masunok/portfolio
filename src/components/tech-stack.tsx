"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Brain, 
  Database, 
  Globe, 
  Cpu,
  GitBranch,
  Server
} from "lucide-react";

const techCategories = [
  {
    title: "AI & 머신러닝",
    icon: Brain,
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
    technologies: [
      { name: "TensorFlow", level: "고급" },
      { name: "PyTorch", level: "고급" },
      { name: "Scikit-learn", level: "고급" },
      { name: "OpenAI API", level: "고급" },
      { name: "LangChain", level: "중급" },
      { name: "Hugging Face", level: "중급" },
    ]
  },
  {
    title: "백엔드 개발",
    icon: Server,
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
    technologies: [
      { name: "Python", level: "고급" },
      { name: "Node.js", level: "중급" },
      { name: "Django", level: "고급" },
      { name: "FastAPI", level: "중급" },
      { name: "PostgreSQL", level: "중급" },
      { name: "Redis", level: "중급" },
    ]
  },
  {
    title: "프론트엔드 개발",
    icon: Globe,
    color: "text-green-500",
    bgColor: "bg-green-500/10",
    technologies: [
      { name: "React", level: "고급" },
      { name: "Next.js", level: "고급" },
      { name: "TypeScript", level: "중급" },
      { name: "Tailwind CSS", level: "중급" },
      { name: "Vue.js", level: "중급" },
      { name: "JavaScript", level: "고급" },
    ]
  },
  {
    title: "데이터 & 인프라",
    icon: Database,
    color: "text-orange-500",
    bgColor: "bg-orange-500/10",
    technologies: [
      { name: "Docker", level: "중급" },
      { name: "AWS", level: "중급" },
      { name: "Kubernetes", level: "초급" },
      { name: "MongoDB", level: "중급" },
      { name: "Apache Spark", level: "초급" },
      { name: "Elasticsearch", level: "초급" },
    ]
  },
  {
    title: "개발 도구",
    icon: GitBranch,
    color: "text-gray-500",
    bgColor: "bg-gray-500/10",
    technologies: [
      { name: "Git", level: "고급" },
      { name: "GitHub", level: "고급" },
      { name: "VS Code", level: "고급" },
      { name: "Jupyter", level: "고급" },
      { name: "Postman", level: "중급" },
      { name: "Docker Compose", level: "중급" },
    ]
  },
  {
    title: "알고리즘 & 자료구조",
    icon: Cpu,
    color: "text-red-500",
    bgColor: "bg-red-500/10",
    technologies: [
      { name: "Python", level: "고급" },
      { name: "C++", level: "중급" },
      { name: "Java", level: "중급" },
      { name: "LeetCode", level: "고급" },
      { name: "백준", level: "고급" },
      { name: "프로그래머스", level: "고급" },
    ]
  }
];

const getLevelColor = (level: string) => {
  switch (level) {
    case "고급":
      return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300";
    case "중급":
      return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300";
    case "초급":
      return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300";
    default:
      return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300";
  }
};

export function TechStack() {
  return (
    <section id="techstack" className="py-20 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">기술 스택</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            다양한 기술 스택을 활용하여 최적의 솔루션을 제공합니다.
            각 기술에 대한 숙련도는 실무 경험을 바탕으로 평가됩니다.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {techCategories.map((category, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <div className={`p-2 rounded-lg ${category.bgColor}`}>
                    <category.icon className={`h-5 w-5 ${category.color}`} />
                  </div>
                  <span>{category.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {category.technologies.map((tech, techIndex) => (
                    <div key={techIndex} className="flex justify-between items-center">
                      <span className="text-sm font-medium">{tech.name}</span>
                      <Badge 
                        variant="secondary" 
                        className={`text-xs ${getLevelColor(tech.level)}`}
                      >
                        {tech.level}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Skills Summary */}
        <div className="mt-16 text-center">
          <Card className="max-w-4xl mx-auto">
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-4">핵심 역량</h3>
              <div className="flex flex-wrap justify-center gap-2">
                <Badge variant="outline" className="text-sm">AI 에이전트 개발</Badge>
                <Badge variant="outline" className="text-sm">머신러닝 모델링</Badge>
                <Badge variant="outline" className="text-sm">풀스택 개발</Badge>
                <Badge variant="outline" className="text-sm">강의 및 교육</Badge>
                <Badge variant="outline" className="text-sm">알고리즘 문제해결</Badge>
                <Badge variant="outline" className="text-sm">프로젝트 관리</Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
} 