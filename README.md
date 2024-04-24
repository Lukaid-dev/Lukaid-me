# Lukaid.me

## Dependency

```bash
npm install react-syntax-highlighter @types/react-syntax-highlighter gray-matter react-icons react-markdown remark-gfm
npm install -D @tailwindcss/typography prettier-plugin-tailwindcss
```

## TODO

### 문서 작성

- 지금까지 회고
  - mdx 포기 및 react markdown 선택 이유 (https://npmtrends.com/gray-matter-vs-next-mdx-remote-vs-react-markdown-vs-react-syntax-highlighter)
  - gray-matter, typography, prose정리하기

### 개발

**랜딩페이지 개발!**

- 포트폴리오 개발
  - 경력 / 플젝 서머리카드 반응형 더 좋은 방법 없는지 고려
  - 업무 - 언어 - 기여 및 성과 이 정도로 규격화 더 좋을 것 같음
- pagination, 무한 스크롤
- Tag, 카테고리, 검색기능
- Theme 마무리
  - Extra attributes from the server: data-theme 에러 해결
  - 배포판에서는 "setInitTheme is not defined" 에러가 나오면서 새로고침시 data-theme이 null이 됨..
  - 블로그 쪽 테마 적용 마무리
  - 포트폴리오 쪽 테마 적용 마무리
- 페이지 전환시 로딩바
- error handling
  - not found page
  - error page

### 참고자료

- https://github.com/ParkJeongwoong/ParkJeongwoong.github.io
- https://github.com/keisokoo/unsangu.com
