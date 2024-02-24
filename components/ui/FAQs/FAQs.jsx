import LayoutEffect from "@/components/LayoutEffect"
import SectionWrapper from "@/components/SectionWrapper"

const faqsList = [
    {
        q: "What is NarrativeVision?",
        a: "NarrativeVision is an advanced AI tool designed to transform text into engaging videos. It utilizes powerful algorithms to bring written stories to life through dynamic visuals and animations.",
    },
    {
        q: "How does NarrativeVision work?",
        a: "NarrativeVision employs cutting-edge natural language processing and video generation techniques. It interprets the provided text, identifies key elements, and then creates corresponding visual content to seamlessly narrate the story.",
    },
    {
        q: "What formats does NarrativeVision support for video output?",
        a: "NarrativeVision supports popular video formats, ensuring compatibility with platforms such as YouTube, Vimeo, and social media channels. Common formats like MP4, MOV, and AVI are readily available.",
    },
    {
        q: "Is there a learning curve to use NarrativeVision?",
        a: "Not at all. NarrativeVision is designed with user-friendliness in mind. Its intuitive interface and user-friendly controls make it accessible for both beginners and experienced content creators.",
    },
    {
        q: "Are there any specific hardware requirements to run NarrativeVision?",
        a: "NarrativeVision is designed to be compatible with standard hardware configurations. It operates efficiently on most modern computers, ensuring accessibility for a broad range of users.",
    },
    {
        q: "Is there a limit to the length of characters that can be used to generate video?",
        a: "Currently users can use up to 4096 characters as text input for generating videos but we are improving it to accomodate more characters as input text.",
    }
]

const FAQs = () => (
    <SectionWrapper id="faqs">
        <div className="custom-screen text-gray-300">
            <div className="max-w-xl text-center xl:mx-auto">
                <h2 className="text-gray-50 text-3xl font-extrabold sm:text-4xl">
                    Everything you need to know
                </h2>
                <p className="mt-3">
                    Here are the most questions people always ask about.
                </p>
            </div>
            <div className='mt-12'>
                <LayoutEffect
                    className="duration-1000 delay-300"
                    isInviewState={{
                        trueState: "opacity-1",
                        falseState: "opacity-0 translate-y-12"
                    }}
                >
                    <ul className='space-y-8 gap-12 grid-cols-2 sm:grid sm:space-y-0 lg:grid-cols-3'>
                        {faqsList.map((item, idx) => (
                            <li
                                key={idx}
                                className="space-y-3"
                            >
                                <summary
                                    className="flex items-center justify-between font-semibold text-gray-100">
                                    {item.q}
                                </summary>
                                <p
                                    dangerouslySetInnerHTML={{ __html: item.a }}
                                    className='leading-relaxed'>
                                </p>
                            </li>
                        ))}
                    </ul>
                </LayoutEffect>
            </div>
        </div>
    </SectionWrapper>
)

export default FAQs