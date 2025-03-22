import { Link } from "react-router-dom";
import { Accordion } from "./Accordion";

export const HelpCard = () => {
    

    const faqs = [
        {
            "id": 1,
            "question": "I want to partner my restaurant with Swiggy",
            "answer": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus earum dicta nesciunt, nulla alias consequuntur cumque incidunt saepe mollitia esse! Magni praesentium delectus excepturi nostrum illo repellendus cum eius neque, aperiam dolores quaerat quis dolore magnam doloremque minus sint nemo qui necessitatibus at. Perspiciatis, corrupti cum labore quos odio porro!"
        },
        {
            "id": 2,
            "question": "What are the mandatory documents needed to list my restaurant on Swiggy?",
            "answer": "Lorem ipsum dolor sit amet consectetur adipisicing elit. At accusamus nobis tempore perferendis qui, quam, atque reprehenderit vero quaerat, assumenda pariatur eveniet. Maxime eaque, neque corrupti ad minus repudiandae consectetur!"
        },
        {
            "id": 3,
            "question": "I want to opt-out from Google reserve",
            "answer": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse iste dolor deserunt expedita quam fugit et inventore amet pariatur. Animi."
        },
        {
            "id": 4,
            "question": "After I submit all documents, how long will it take for my restaurant to go live on Swiggy?",
            "answer": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse iste dolor deserunt expedita quam fugit et inventore amet pariatur. Animi."
        },

        {
            "id": 5,
            "question": "What is this one time Onboarding fees? Do I have to pay for it while registering?",
            "answer": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse iste dolor deserunt expedita quam fugit et inventore amet pariatur. Animi."
        },
        {
            "id": 6,
            "question": "Who should I contact if I need help & support in getting onboarded?",
            "answer": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse iste dolor deserunt expedita quam fugit et inventore amet pariatur. Animi."
        },
        {
            "id": 7,
            "question": "How much commission will I be charged by Swiggy?",
            "answer": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse iste dolor deserunt expedita quam fugit et inventore amet pariatur. Animi."
        },
        {
            "id": 8,
            "question": "I don’t have an FSSAI licence for my restaurant. Can it still be onboarded?",
            "answer": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse iste dolor deserunt expedita quam fugit et inventore amet pariatur. Animi."
        }
    ];

    return (
        <div className='bg-cyan-700 mt-4'>
            <div className="w-[80%] mx-auto pt-10">
                <div className="mt-3 text-start text-white">
                    <h1 className="text-2xl font-bold">Help & Support</h1>
                    <h1 className="">Let's take a step ahead and help you better.</h1>

                </div>
                <div className="w-[100%] mx-auto flex pl-10 pt-10 mt-10 mb-10 bg-white border border-gray-200 ">
                    <div className="pt-7 text-start mr-10 bg-slate-100 pr-5 pl-20">
                        <div className="pb-10 text-md font-bold">Partner Onboarding</div>
                        <div className="pb-10 text-md font-bold">Legal</div>
                        <div className="pb-10 text-md font-bold">FAQs</div>
                        <div className="pb-10 text-md font-bold">Instamart Onboarding</div>
                    </div>
                    <div >

                        <div className="p-5">
                            <Link href="#">
                                <h5 className="mb-2 text-2xl text-start font-bold tracking-tight text-gray-900 dark:text-white">Partner Onboarding</h5>
                            </Link>
                            <div className="" id="accordion-flush" data-accordion="collapse" data-active-classes="bg-white dark:bg-gray-900 text-gray-900 dark:text-white" data-inactive-classes="text-gray-500 dark:text-gray-400">
                                {faqs.map((faq) => (
                                    <Accordion key={faq.id} faq={faq} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
