import Image from "next/image"

const Brand = ({ ...props }) => (
    <Image
        src="/Narrative__1_-removebg-preview.png"
        alt="NarrativeVision logo"
        {...props}
        width={110}
        height={50}
        priority
    />
)
export default Brand