
'use client';

import { Accordion } from 'flowbite-react';

const Accordian = ({ title, content }) => {
    return (
        <Accordion>
            <Accordion.Panel>
                <Accordion.Title>{title}</Accordion.Title>
                <Accordion.Content>
                    <p className="mb-2 text-gray-500 dark:text-gray-400">
                        {content}
                    </p>

                </Accordion.Content>
            </Accordion.Panel>

        </Accordion>
    );
}
export default Accordian;