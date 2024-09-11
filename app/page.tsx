import createSupabaseServerClient from "@/lib/server";
import Image from "next/image";


export default async function Home() {
  const supabase = createSupabaseServerClient();
  const { data: user, error } = await (await supabase).auth.getUser();

  return (
    <div>
      {/* <img src={`${user.user?.user_metadata}`} alt="avatar" className="w-32 h-32" /> */}

      <Image src={`${user.user?.user_metadata?.avatar_url}`} alt="avatar" width={200} height={200} />

      <pre>{JSON.stringify(user, null, 2)}</pre>
    </div>
  );
}
