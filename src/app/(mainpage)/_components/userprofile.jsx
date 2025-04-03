import { getUser } from "@/service/user-service";

export default async function Userprofile() {
  const user = await getUser();
  return (
    <>
      <div className="w-14 rounded-full overflow-hidden">
        <img src={user.profile} alt="" />
      </div>
      <div>
        <h1 className="text-xl font-medium pt-2 text-[#0B3954]">
          {user.username}
        </h1>
        <p className="text-lg text-[#087E8B]">{user.email}</p>
      </div>
    </>
  );
}
