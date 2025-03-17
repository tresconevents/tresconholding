"use client";

import { MessageContainer } from './message-container';
import { MessageContent } from './message-content';
import { MessageImage } from './message-image';

export function MessageSection() {
  return (
    <section className="bg-[#003B3D] py-24">
      <MessageContainer>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <MessageImage />
          <MessageContent />
        </div>
      </MessageContainer>
    </section>
  );
}