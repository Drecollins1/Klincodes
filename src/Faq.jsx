import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";

const Faq = () => {
  return (
    <>
      <div>
        <div className=" max-w-7xl mx-auto lg:px-28">
          <h2 className="text-center lg:mt-20 mt-10 mb-5 lg:text-3xl font-semibold">
            Frequently asked questions
          </h2>
          <p className="text-center px-5  text-lg text-gray-500">
            Most frequently asked questions that you need to know.{" "}
          </p>
          <div className="mt-10 ">
            <Accordion allowToggle className="flex flex-col gap-8">
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box
                      className="font-bold"
                      as="span"
                      flex="1"
                      textAlign="left"
                    >
                      How do I make request for your service?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  -Online via the website (www.klincode.com) <br /> -By phone
                  call/SMS <br />
                  -Visiting our office <br />
                  -Any of our service locations.
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box
                      className="font-bold"
                      as="span"
                      flex="1"
                      textAlign="left"
                    >
                      Do you have experienced staff?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  Our staffs are highly professional and industry standard
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box
                      className="font-bold"
                      as="span"
                      flex="1"
                      textAlign="left"
                    >
                      Can I schedule a one time cleaning or do you only offer
                      recurring service?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  We offer both one time cleaning and reoccurring service.
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box
                      className="font-bold"
                      as="span"
                      flex="1"
                      textAlign="left"
                    >
                      What if I need to cancel or reschedule my appointment?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  You can always reschedule your appointment to a time that
                  suits you best.
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box
                      className="font-bold"
                      as="span"
                      flex="1"
                      textAlign="left"
                    >
                      Can I get a free quote or estimate?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  Yes, we will send you a free quote
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box
                      className="font-bold"
                      as="span"
                      flex="1"
                      textAlign="left"
                    >
                      How do I pay for your service?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  You can make one off payment once we send you the quote or you
                  can pay 50% before we commence the cleaning and balance up
                  once the job is done.
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>

      <div className="max-w-6xl my-16 mx-auto py-10  rounded-2xl bg-gray-100">
        <div className="flex flex-col items-center">
          <img
            src="../assets/avatar.png"
            alt="Team"
            className="rounded-full border-zinc-300 mb-4"
          />
          <h2 className="text-xl font-semibold text-zinc-800 mb-1">
            Still have questions?
          </h2>
          <p className="text-zinc-600 px-10 text-center mb-4">
            Can't find the answer you're looking for? Please chat to our
            friendly team.
          </p>
          <a href="https://wa.link/o1uify">
            <button className="bg-blue-950 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Call Us
            </button>
          </a>
        </div>
      </div>
    </>
  );
};

export default Faq;
