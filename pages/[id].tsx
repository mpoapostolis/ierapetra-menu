import Link from "next/link";
import { useRouter } from "next/router";

//   quiz_: "https://alan.talent.gr/digitalierapetra/QuestionsGame/en_us/",

const map: Record<string, string> = {
  map: "https://ierapetra-library.vercel.app",
  quiz: "https://alan.talent.gr/digitalierapetra/QuestionsGame",
  memory: "https://memory-game-appoploo.vercel.app",
  painting: "https://ierapetra-draw-appoploo.vercel.app",
  library: "https://ierapetra-library.vercel.app",
};

export default function Page() {
  const router = useRouter();
  const { id } = router.query;
  const url = map[id as string];
  const { locale } = router;
  let loc = locale;
  if (id === "quiz" && locale === "el") loc = "";
  if (id === "quiz" && locale === "en") loc = "en_us";
  return (
    <div className="relative w-screen h-screen ">
      <Link
        className=" flex items-center bg-black  p-2 w-10 h-10  text-3xl  justify-center absolute top-2 left-2  rounded-full "
        href="/"
      >
        <picture>
          <img src="/arrow_back.png" alt="" />
        </picture>
      </Link>
      <iframe src={`${url}/${loc}`} className="w-screen h-screen"></iframe>
    </div>
  );
}
