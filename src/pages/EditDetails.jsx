import React from 'react';
import Sidebar from '../components/Sidebar';


export default function EditDetails() {
  return (
    <>
    
    
        <Sidebar />
        <div class="flex items-center justify-center p-12 p-5 ml-28 mt-7 lg:mx-auto">
            <div class="mx-auto w-full max-w-[550px] p-9 shadow-md">
                <form action="https://formbold.com/s/FORM_ID" method="POST">
                <div class="mb-5">
                    <label
                    for="name"
                    class="mb-3 block text-base font-medium text-[#07074D]"
                    >
                    Full Name
                    </label>
                    <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Full Name"
                    class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                </div>
                <div class="mb-5">
                    <label
                    for="subject"
                    class="mb-3 block text-base font-medium text-[#07074D]"
                    >
                    Subject
                    </label>
                    <input
                    type="text"
                    name="subject"
                    id="subject"
                    placeholder="subject"
                    class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                </div>
                <div class="mb-5">
                    <label
                    for="idea"
                    class="mb-3 block text-base font-medium text-[#07074D]"
                    >
                    Idea
                    </label>
                    <input
                    type="text"
                    name="idea"
                    id="idea"
                    placeholder="Enter your idea"
                    class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                </div>
                <div class="mb-5">
                    <label
                    for="task"
                    class="mb-3 block text-base font-medium text-[#07074D]"
                    >
                    Task
                    </label>
                    <textarea
                    rows="4"
                    name="task"
                    id="task"
                    placeholder="Type your task"
                    class="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    ></textarea>
                </div>
                <div>
                    <button
                    class="hover:shadow-form rounded-md bg-teal-100 bg-opacity-60 text-teal-600 py-3 px-8 text-base font-semibold  outline-none"
                    >
                    Edit
                    </button>
                </div>
                </form>
            </div>
        </div>
    </>
  )
}
