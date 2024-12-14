import Image from "next/image";

type AlbumItemProps = {
    cover?: string;
    title?: string;
}

export default function AlbumItem({cover, title}: AlbumItemProps ) {
    return (
        <div className={'rounded border hover:border-2 border-gray-500'}>
            {/*Album Cover*/}
            <div className={'albumCover rounded'}>
                <Image className={' hover:cursor-pointer'} src={cover? cover : 'https://picsum.photos/200'}
                       alt={'Album Cover'} fill={true}/>
            </div>
            {/*Album Info*/}
            <div className={'flex justify-between ps-1 w-fit'}>
                <span className={'hover:cursor-pointer'}>{title}</span>
            </div>
        </div>
    )
}