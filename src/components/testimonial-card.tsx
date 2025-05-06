import React from 'react';

interface Props {
  // Define the props interface here
  name: string;
  handle: string; // handle is the @username
  imageUrl: string;
  post: string;
}

const TestimonialCard: React.FC<Props> = ({ name, handle, imageUrl, post }) => {
  return (
    <div className="testimonial-card w-[340px] flex flex-col gap-4 bg-white p-6 rounded-lg">
        <div className="flex items-center gap-4 self-stretch">
            <div className="w-12 h-12">
                <img className="w-12 h-12 object-cover" src={imageUrl}></img>
            </div>
            <div className="flex flex-col gap-px grow">
                <span className="font-semibold text-lg text-justify text-neutral-900">{name}</span>
                <span className="font-normal text-sm text-justify text-neutral-600">{handle}</span>
            </div>
        </div>
        <span className="font-normal text-base text-left text-neutral-600">{post}</span>
    </div>
  );
};

export default TestimonialCard;