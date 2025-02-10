export default function imageLoader({ src }: { src: string }) {
  return src.startsWith('/') ? `${process.env.NEXT_PUBLIC_BASE_PATH}${src}` : src;
} 