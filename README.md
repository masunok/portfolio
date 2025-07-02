# 신제용 포트폴리오 웹사이트

AI 개발자 & 프리랜서 강사 신제용님의 포트폴리오 웹사이트입니다.

## 🚀 기술 스택

- **프레임워크**: Next.js 14 (App Router)
- **스타일링**: Tailwind CSS
- **UI 컴포넌트**: ShadCN UI
- **렌더링**: Static Site Generation (SSG)
- **배포**: Vercel
- **폰트**: Inter, DM Sans
- **아이콘**: Lucide React

## ✨ 주요 기능

- **반응형 디자인**: Desktop, Tablet, Mobile 최적화
- **다크모드 지원**: 시스템 설정 감지 및 토글 기능
- **SEO 최적화**: 메타태그, Open Graph, Twitter Card
- **접근성**: 시멘틱 마크업, 키보드 네비게이션
- **연락처 폼**: EmailJS 연동 (설정 필요)

## 📁 프로젝트 구조

```
src/
├── app/
│   ├── layout.tsx          # 루트 레이아웃
│   ├── page.tsx            # 메인 페이지
│   └── globals.css         # 전역 스타일
├── components/
│   ├── ui/                 # ShadCN UI 컴포넌트
│   ├── navigation.tsx      # 네비게이션
│   ├── hero.tsx           # 히어로 섹션
│   ├── about.tsx          # 소개 섹션
│   ├── tech-stack.tsx     # 기술 스택 섹션
│   ├── contact.tsx        # 연락처 섹션
│   ├── footer.tsx         # 푸터
│   └── theme-provider.tsx # 테마 프로바이더
└── lib/
    └── utils.ts           # 유틸리티 함수
```

## 🛠️ 설치 및 실행

1. **의존성 설치**
   ```bash
   npm install
   ```

2. **개발 서버 실행**
   ```bash
   npm run dev
   ```

3. **빌드**
   ```bash
   npm run build
   ```

4. **프로덕션 실행**
   ```bash
   npm start
   ```

## 📝 커스터마이징

### 개인 정보 수정
- `src/app/layout.tsx`: 메타데이터 수정
- `src/components/hero.tsx`: 이름, 직함, 소개 수정
- `src/components/about.tsx`: 경력, 통계 정보 수정
- `src/components/contact.tsx`: 연락처 정보 수정

### 소셜 미디어 링크
- `src/components/contact.tsx`: socialLinks 배열 수정
- `src/components/footer.tsx`: socialLinks 배열 수정

### 이메일 연동
EmailJS를 사용한 이메일 전송을 위해 다음 설정이 필요합니다:

1. EmailJS 계정 생성 및 서비스 설정
2. 환경 변수 설정
3. `src/components/contact.tsx`의 handleSubmit 함수 수정

## 🎨 디자인 시스템

- **색상**: Gray 테마 기반
- **타이포그래피**: Inter (영문), DM Sans (한글)
- **간격**: Tailwind CSS spacing 시스템
- **반응형**: Mobile First 접근법

## 📱 반응형 브레이크포인트

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🔧 환경 변수

```env
# EmailJS 설정 (선택사항)
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

## 📄 라이선스

MIT License

## 🤝 기여

프로젝트에 기여하고 싶으시다면 Pull Request를 보내주세요.

---

**신제용** - AI 개발자 & 프리랜서 강사
