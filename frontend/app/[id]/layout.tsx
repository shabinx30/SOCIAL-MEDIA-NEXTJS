import ProfileTabs from "../../components/profile/tabs";
import Link from "next/link";
import Image from "next/image";

//icons
import { RiLinkM } from "react-icons/ri";
import { GoPlus } from "react-icons/go";


export async function generateStaticParams() {
  return [
    { id: 'shabin' },
  ];
}

export const revalidate = 10;

const ProfileLayout = async ({ children, params }: { children: React.ReactNode; params: { id: string } }) => {
    const { id } = params;
    
    
    const profileData = {
        name: "SHABIN",
        bio: "🧑‍💻 Web Developer",
        website: "https://shabeensharih.com",
        posts: 16,
        followers: "743M",
        following: 1214,
        profileImage: "https://instagram.fcok4-1.fna.fbcdn.net/v/t51.2885-19/476501464_1523240058345855_3565333406899966342_n.jpg?_nc_ht=instagram.fcok4-1.fna.fbcdn.net&_nc_cat=103&_nc_oc=Q6cZ2AFmAvuVSWABIM48hyQJuLl-08cjUxkMUjPOwtHH0v8YPQs6epqPJdaewSg-KuQeHdQ&_nc_ohc=mCOxKKMrIaUQ7kNvgHfSSVI&_nc_gid=af8b59559ba54a58a9cb6cbc866ffde9&edm=ALGbJPMBAAAA&ccb=7-5&oh=00_AYBP21YcMLjgWjR9oT1Agodt3dZ-r0Lngl4B_Y81inoRLA&oe=67CCA09A&_nc_sid=7d3ac5"
    };

    // button style
    const buttonStyle = "px-4 py-1 bg-[#efefef] hover:bg-[#DBDBDB] dark:bg-[#333333] rounded-lg dark:hover:bg-[#262626] text-sm duration-150";

    // Reusable component for profile stats
    const ProfileStat = ({ label, value }: { label: string, value: string | number }) => (
        <div className="block">
            <p className="font-semibold">{value}</p>
            <p className="text-[#A8A8A8]">{label}</p>
        </div>
    );

    // Reusable component for story circle
    const StoryCircle = ({ isAdd = false }: { isAdd?: boolean }) => (
        <div className={`bg-[#E1E1E1] dark:bg-[#333333] w-20 h-20 rounded-full cursor-pointer`}>
            <div className={`${isAdd ? 'flex justify-center items-center' : ''} border-2 ${isAdd ? 'bg-[#F5F5F5] dark:bg-[#121212]' : ''} border-white dark:border-black w-[95%] h-[95%] rounded-full m-[0.1435rem]`}>
                {isAdd && <GoPlus className="text-[#9c9c9c] dark:text-[#737373]" size={55} />}
            </div>
        </div>
    );

    return (
        <div className="profile-layout select-none">
            {/* Mobile header */}
            <div className="fixed flex md:hidden w-full h-[3em] bg-white dark:bg-black border-b border-[#DBDBDB] dark:border-[#2e2e2e] justify-between items-center px-3">
                <h1 className="font-bold text-xl">{id}</h1>
                <div className="flex gap-6">
                    <Image className="dark:invert" src="https://cdn-icons-png.flaticon.com/512/10103/10103630.png" alt="create" width={26} height={22} />
                    <Image className="dark:invert" src="https://cdn-icons-png.flaticon.com/512/13894/13894991.png" alt="more" width={26} height={26} />
                </div>
            </div>

            <div className="flex-1 pt-8 md:pt-0 md:px-[2em] lg:px-[4em]">
                <div className="flex justify-evenly lg:justify-center gap-0 lg:gap-8 pt-[2.5em]">
                    {/* Profile picture */}
                    <div className="flex md:w-[160px] md:h-[160px]">
                        <Image
                            className="cursor-pointer md:w-full md:h-full rounded-full duration-300"
                            src={profileData.profileImage}
                            alt="profile picture"
                            width={100}
                            height={100}
                        />
                    </div>

                    <div className="block">
                        {/* Desktop header */}
                        <div className="hidden md:flex duration-300">
                            <h1 className="text-xl">{id}</h1>
                            <button className={`mt-4 md:mt-0 md:ml-4 h-[2.2em] ${buttonStyle}`}>Edit Profile</button>
                            <button className={`ml-2 h-[2.2em] ${buttonStyle}`}>View archive</button>
                            <Image
                                className="hidden cursor-pointer md:block dark:invert w-6 h-6 mx-2 my-0.5"
                                src="https://cdn-icons-png.flaticon.com/512/5693/5693241.png"
                                alt="settings"
                                width={20}
                                height={20}
                            />
                        </div>

                        {/* Mobile name */}
                        <p className="md:hidden text-base font-medium">{profileData.name}</p>

                        {/* Stats section */}
                        <div className="flex gap-1 md:gap-6 pt-2 md:pt-6 duration-300">
                            {/* Mobile stats */}
                            <div className="flex md:hidden gap-8">
                                <ProfileStat label="posts" value={profileData.posts} />
                                <ProfileStat label="followers" value={profileData.followers} />
                                <ProfileStat label="following" value={profileData.following} />
                            </div>

                            {/* Desktop stats */}
                            <div className="hidden md:flex gap-6">
                                <p><span className="font-semibold">{profileData.posts}</span><span className="text-[#A8A8A8]"> posts</span></p>
                                <p><span className="font-semibold">{profileData.followers}</span><span className="text-[#A8A8A8]"> followers</span></p>
                                <p><span className="font-semibold">{profileData.following}</span><span className="text-[#A8A8A8]"> following</span></p>
                            </div>
                        </div>

                        {/* Desktop bio section */}
                        <div className="pt-8 hidden md:block gap-0">
                            <p>{profileData.name}</p>
                            <p>{profileData.bio}</p>
                            <div className="flex text-[#00376B] dark:text-[#E0E2EF]">
                                <RiLinkM size={16} className="my-auto mr-1" />
                                <Link
                                    className="hover:underline text-sm font-semibold"
                                    href={profileData.website}
                                    target="blank"
                                >
                                    {profileData.website.replace('https://', '')}
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mobile bio section */}
                <div className="pt-8 px-4 block md:hidden gap-0">
                    <p>{profileData.bio}</p>
                    <div className="flex text-[#00376B] dark:text-[#E0E2EF]">
                        <RiLinkM size={16} className="my-auto mr-1" />
                        <Link
                            className="hover:underline text-sm font-semibold"
                            href={profileData.website}
                            target="blank"
                        >
                            {profileData.website.replace('https://', '')}
                        </Link>
                    </div>
                </div>

                {/* Mobile buttons */}
                <div className="flex md:hidden duration-300 w-full px-4 pt-4">
                    <button className={`w-[50%] h-[2.5em] ${buttonStyle}`}>Edit Profile</button>
                    <button className={`ml-2 w-[50%] h-[2.5em] ${buttonStyle}`}>Share profile</button>
                </div>

                {/* Stories section */}
                <div className="flex pt-[2em] md:pt-[3em] px-[1em] md:px-[8em] justify-start gap-6 md:gap-10">
                    <StoryCircle />
                    <StoryCircle />
                    <StoryCircle isAdd={true} />
                </div>
            </div>

            {/* Profile tabs */}
            <ProfileTabs userId={id} />

            {/* Content area */}
            <div className="md:mr-[2em] lg:mr-[8em] lg:ml-[6em]">{children}</div>
        </div>
    );
}

export default ProfileLayout;