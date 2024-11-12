import Image from 'next/image';

export default function Git() {
    return (
        <>
            <a href="https://github.com/Priyanshu337">
                <div className="" >
                    <span className="icon">
                        <Image
                            src="/github-mark.svg"
                            alt="GitHub Logo"
                            width={100}
                            height={100} />
                    </span>
                </div>
            </a>
        </>

    )
}