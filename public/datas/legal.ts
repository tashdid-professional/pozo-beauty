export interface LegalContent {
  title: string;
  lastUpdated: string;
  sections: {
    title: string;
    content: string | string[];
  }[];
}

export interface FAQItem {
  question: string;
  answer: string;
}

export const privacyPolicy: LegalContent = {
  title: "Privacy Policy",
  lastUpdated: "May 20, 2026",
  sections: [
    {
      title: "Introduction",
      content: "Welcome to Pozo Beauty. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you about how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you."
    },
    {
      title: "Data Collection",
      content: [
        "Identity Data: includes first name, last name, username or similar identifier.",
        "Contact Data: includes email address and telephone numbers.",
        "Technical Data: includes internet protocol (IP) address, login data, browser type and version."
      ]
    },
    {
      title: "Use of Data",
      content: "We use your data to provide and improve our services, contact you with newsletters or marketing materials, and to manage your account."
    }
  ]
};

export const termsAndConditions: LegalContent = {
  title: "Terms and Conditions",
  lastUpdated: "May 20, 2026",
  sections: [
    {
      title: "Acceptance of Terms",
      content: "By accessing this website, you are agreeing to be bound by these website Terms and Conditions of Use, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws."
    },
    {
      title: "Use License",
      content: "Permission is granted to temporarily download one copy of the materials on Pozo Beauty's website for personal, non-commercial transitory viewing only."
    },
    {
      title: "Disclaimer",
      content: "The materials on Pozo Beauty's website are provided on an 'as is' basis. Pozo Beauty makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability."
    }
  ]
};

export const faqs: FAQItem[] = [
  {
    question: "How long does shipping take?",
    answer: "Shipping typically takes 3-5 business days for domestic orders and 7-14 business days for international orders."
  },
  {
    question: "Do you offer returns?",
    answer: "Yes, we offer a 30-day return policy for unused and unopened products in their original packaging."
  },
  {
    question: "Are your products cruelty-free?",
    answer: "Absolutely! We are proud to be a 100% cruelty-free brand. None of our products or ingredients are tested on animals."
  },
  {
    question: "Can I change my order after it's placed?",
    answer: "We process orders quickly, but if you contact us within 1 hour of placement, we may be able to make changes."
  }
];
