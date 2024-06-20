import firstSliderImage from "../assets/sliderImage1.png";

// InventureData Images
import EquityImage from "../assets/InventureData/Equity.png";
import MTFImage from "../assets/InventureData/MTF.png";
import IPOImage from "../assets/InventureData/IPO.png";
import CommodityImage from "../assets/InventureData/Commodity.png";
import MutualFundsImage from "../assets/InventureData/MutualFunds.png";
import SGBImage from "../assets/InventureData/SGB.png";
import NCBImage from "../assets/InventureData/NCB.png";
import InsuranceImage from "../assets/InventureData/Insurance.png";

// DematAccountData Images
import trackingImage from "../assets/DematAcImages/tracking.png";
import riskImage from "../assets/DematAcImages/risk.png";
import optimizeImage from "../assets/DematAcImages/optimization.png";
import reseachImage from "../assets/DematAcImages/call-center.png";
import paperlessProcessImage from "../assets/DematAcImages/paperless.png";
import variety from "../assets/DematAcImages/form.png";
import networkImage from "../assets/DematAcImages/global-network.png";
import leverage from "../assets/DematAcImages/line-graph.png";

import { TiSocialFacebook } from "react-icons/ti";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

export const NavbarData = [
  {
    id: 1,
    Navtitle: "About us",
    Link: "",
  },
  {
    id: 2,
    Navtitle: "Product & Services",
    Link: "",
  },
  {
    id: 3,
    Navtitle: "Partner",
    Link: "",
  },
  {
    id: 4,
    Navtitle: "Quick Links",
    Link: "",
  },
  {
    id: 5,
    Navtitle: "Investor Relation",
    Link: "",
  },
  {
    id: 6,
    Navtitle: "Login",
    Link: "",
  },
];

export const SliderData = [
  {
    id: 1,
    image: firstSliderImage,
    alt: "first Image",
  },
  {
    id: 2,
    image: firstSliderImage,
    alt: "first Image",
  },
  {
    id: 3,
    image: firstSliderImage,
    alt: "first Image",
  },
  {
    id: 4,
    image: firstSliderImage,
    alt: "first Image",
  },
];

export const InventureData = [
  {
    id: 1,
    title: "Equity / FnO",
    description:
      "Offering expertise and reliability in navigating the market to help clients achieve their financial goals.",
    image: EquityImage,
  },
  {
    id: 2,
    title: "Margin trading facility",
    description:
      "Offering expertise and reliability in navigating the market to help clients achieve their financial goals.",
    image: MTFImage,
  },
  {
    id: 3,
    title: "Initial Public Offering",
    description:
      "Offering expertise and reliability in navigating the market to help clients achieve their financial goals.",
    image: IPOImage,
  },
  {
    id: 4,
    title: "Commodity/Currency",
    description:
      "Offering expertise and reliability in navigating the market to help clients achieve their financial goals.",
    image: CommodityImage,
  },
  {
    id: 5,
    title: "Mutual Funds/ ETFs",
    description:
      "Offering expertise and reliability in navigating the market to help clients achieve their financial goals.",
    image: MutualFundsImage,
  },
  {
    id: 6,
    title: "SGB",
    description:
      "Offering expertise and reliability in navigating the market to help clients achieve their financial goals.",
    image: SGBImage,
  },
  {
    id: 7,
    title: "NCD/Debt Instruments",
    description:
      "Offering expertise and reliability in navigating the market to help clients achieve their financial goals.",
    image: NCBImage,
  },
  {
    id: 8,
    title: "Insurance",
    description:
      "Offering expertise and reliability in navigating the market to help clients achieve their financial goals.",
    image: InsuranceImage,
  },
];

export const DematAccountData = [
  {
    id: 1,
    image: trackingImage,
    title: "Easy Tracking",
  },
  {
    id: 2,
    image: riskImage,
    title: "Reduce Risk :- no risk of misplacing",
  },
  {
    id: 3,
    image: optimizeImage,
    title: "Time Efficient",
  },
  {
    id: 4,
    image: reseachImage,
    title: "Reseach based expert assistance",
  },
  {
    id: 5,
    image: paperlessProcessImage,
    title: "Paperless Process",
  },
  {
    id: 6,
    image: variety,
    title: "Wide variety of Asset classes to invest in ",
  },
  {
    id: 7,
    image: networkImage,
    title: "Wide network of 350+ partnered.",
  },
  {
    id: 8,
    image: leverage,
    title: "upto 4x leverage",
  },
];

export const TestimonialData = [
  {
    id: 1,
    name: "Pratik Pandey",
    position: "Lead Intranet Technician",
    description:
      "Inventure Growth has been instrumental in guiding me through the complexities of the financial market. Their expertise and personalized approach have helped me achieve my investment goals with confidence.",
  },
  {
    id: 2,
    name: "Esther Hills",
    position: "Human Directives Director",
    description:
      "Lorem ipsum dolor sit amet consectetur. Ut dui dolor amet justo tristique ut. Porttitor nisl morbi mauris id ipsum nisi habitant lorem. Justo aliquet cursus varius enim. Id ut aliquet vulputate bibendum. Mauris cursus sit mi tincidunt faucibus tristique sit. Et quis non.",
  },
  {
    id: 3,
    name: "Ethel Johnston",
    position: "Lead Intranet Technician",
    description:
      "Inventure Growth has been instrumental in guiding me through the complexities of the financial market. Their expertise and personalized approach have helped me achieve my investment goals with confidence.",
  },
  {
    id: 4,
    name: "Pratik Pandey",
    position: "Lead Intranet Technician",
    description:
      "Inventure Growth has been instrumental in guiding me through the complexities of the financial market. Their expertise and personalized approach have helped me achieve my investment goals with confidence.",
  },
];

export const FAQData = [
  {
    question: "How many programmers does it take to screw a lightbulb?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pharetra lorem eu dolor rhoncus, at scelerisque ligula gravida. Sed porta id mi sit amet convallis. Etiam iaculis massa sit amet lacus blandit sodales. Nulla ultrices velit a diam placerat congue. Pellentesque iaculis, ipsum quis eleifend dapibus, est dui eleifend ante, quis fermentum mi ligula quis nisl. Ut et ex dui. Integer id venenatis quam.",
    open: false,
  },
  {
    question: "Who is the most awesome person?",
    answer: "You! The viewer!",
    open: false,
  },
  {
    question: "How many questions does it take to makes a succesful FAQ Page?",
    answer: "This many!",
    open: false,
  },
  {
    question: "How many programmers does it take to screw a lightbulb?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pharetra lorem eu dolor rhoncus, at scelerisque ligula gravida. Sed porta id mi sit amet convallis. Etiam iaculis massa sit amet lacus blandit sodales. Nulla ultrices velit a diam placerat congue. Pellentesque iaculis, ipsum quis eleifend dapibus, est dui eleifend ante, quis fermentum mi ligula quis nisl. Ut et ex dui. Integer id venenatis quam.",
    open: false,
  },
  {
    question: "Who is the most awesome person?",
    answer: "You! The viewer!",
    open: false,
  },
  {
    question: "How many questions does it take to makes a succesful FAQ Page?",
    answer: "This many!",
    open: false,
  },
];

export const FooterSocialMediaData = [
  {
    id: 1,
    socialMediaTitle: "Facebook",
    icon: TiSocialFacebook,
  },
  {
    id: 1,
    socialMediaTitle: " Twitter",
    icon: FaTwitter,
  },
  {
    id: 1,
    socialMediaTitle: "Instagram",
    icon: FaInstagram,
  },
];

export const FooterData = [
  {
    id: 1,
    title: "Company",
    subtitle: [
      {
        heading: "About us",
        link: "",
      },
      {
        heading: "Careers",
        link: "",
      },
      {
        heading: "Contact Us",
        link: "",
      },
      {
        heading: "Terms And Conditions",
        link: "",
      },
      {
        heading: "Disclaimer",
        link: "",
      },
      {
        heading: "Privacy & Policy",
        link: "",
      },
    ],
  },
  {
    id: 2,
    title: "Login",
    subtitle: [
      {
        heading: "IGSL AERO",
        link: "",
      },
      {
        heading: "Client Back-Office",
        link: "",
      },
      {
        heading: "Client eKYC",
        link: "",
      },
      {
        heading: "Partner Back-Office",
        link: "",
      },
      {
        heading: "Partner eKYC",
        link: "",
      },
    ],
  },
  {
    id: 3,
    title: "Products & Services",
    subtitle: [
      {
        heading: "Equity Trading",
        link: "",
      },
      {
        heading: "Currency Trading",
        link: "",
      },
      {
        heading: "Commodity Trading",
        link: "",
      },
      {
        heading: "Mutual Funds",
        link: "",
      },
      {
        heading: "CDSL e-voting",
        link: "",
      },
      {
        heading: "NSDL eVoting",
        link: "",
      },
    ],
  },
  {
    id: 4,
    title: "Others",
    subtitle: [
      {
        heading: "Client Back-Office",
        link: "",
      },
      {
        heading: "Branch Back-Office",
        link: "",
      },
      {
        heading: "Branch eKYC",
        link: "",
      },
      {
        heading: "IGSL Elite",
        link: "",
      },
      {
        heading: "Partner",
        link: "",
      },
      {
        heading: "Documents",
        link: "",
      },
      {
        heading: "Downloads",
        link: "",
      },
      {
        heading: "Investor Charter",
        link: "",
      },
      {
        heading: "Account closure",
        link: "",
      },
    ],
  },
];

export const footerInvestors = [
  {
    id: 1,
    text: `KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary. ==== "If you are not updated your latest income details in demat & trading a/c than update it as soon as possible. If you are not registered your KYC ( as per SEBI guideline), than send us immediately KYC form along with proof of address & photo ID. For the benefit of the investors SEBI has directed Depositories to send Consolidated Account Statement (CAS) for securities held in demat form with the Depositories. However, if you do not wish to receive the CAS, you may write to your DP separately. As per SEBI Circular on Delivery Instruction slip(DIS), old DIS will not valid (issued before October,2014) from 07 Jan., 2016, Kindly contact to the DP for New DIS. DP will not responsible for any financial losses due to old DIS.`,
  },
  {
    id: 2,
    text: `Prevent Unauthorized Transactions in your demat account --> Update your Mobile Number with your Depository Participant. Receive alerts on your Registered Mobile for all debit and other important transactions in your demat account directly from CDSL on the same day......................issued in the interest of investors.`,
  },
  {
    id: 3,
    text: `No need to issue cheques by investors while subscribing to IPO. Just write the bank account number and sign in the application form to authorise your bank to make payment in case of allotment. No worries for refund as the money remains in investor's account." Beware of fixed / guaranteed / regular returns / capital protection schemes. Stock Brokers (Brokers/Members) or their authorized persons or any of their associates are not authorized to offer fixed / guaranteed / regular returns / capital protection on your investment or authorized to enter into any loan agreement with you to pay interest on the funds offered by you. Please note that in case of default of a member claim for funds or securities / commodities given to the Broker under any arrangement / agreement of indicative return will not be accepted by the relevant Committee of the Exchange as per the approved norms.`,
  },
  {
    id: 4,
    text: `Do not keep funds idle with the Stock Broker. Please note that your Stock Broker has to return the credit balance lying with them, within three working days in case you have not done any transaction within last 30 calendar days. Please note that in case of default of a Member, claim for funds and securities/commodities, without any transaction on the Exchange will not be accepted by the relevant Committee of the Exchange as per the approved norms.`,
  },
  {
    id: 5,
    text: `Check the frequency of accounts settlement opted for. If you have opted for running account, please ensure that your Stock Broker settles your account and, in any case, not later than once in 90 days (or 30 days if you have opted for 30 days settlement). In case of declaration of Member as defaulter, the claims of clients against such Defaulter Member would be subject to norms for eligibility of claims for compensation from Member funds / IPF to the clients of the Defaulter Member. These norms are available on Exchange website at following link: https://www.mcxindia.com/Investor- Services/defaulters/sop-process-faqs-for-handling-of-claims-of-investors-of- defaulter-member`,
  },
  {
    id: 6,
    text: `Stock Brokers are not permitted to accept transfer of securities as margin. Securities offered as margin / collateral MUST remain in the account of the client and can be pledged to the broker only by way of ‘margin pledge’, created in the Depository system. Clients are not permitted to place any securities with the Broker or associate of the Broker or authorized person of the Broker for any reason. Broker can take securities belonging to clients only for settlement of securities sold by the client.`,
  },
  {
    id: 7,
    text: `Always keep your contact details, viz. mobile number / email ID updated with the Broker. Email and mobile number is mandatory and you must provide the same to your Broker for updation in Exchange records. You must immediately take up the matter with Broker / Exchange if you are not receiving the messages from Exchange / Depositories regularly.`,
  },
  {
    id: 8,
    text: `Don't ignore any emails / SMSs received from the Exchange for trades done by you. Verify the same with the contract notes / statement of accounts received from your Stock Broker and report discrepancy, if any, to your Broker in writing immediately and if the Broker does not respond, please take this up with the Exchange/Depositories forthwith.`,
  },
  {
    id: 9,
    text: `Check messages sent by Exchanges on a weekly basis regarding funds and securities balances reported by the Stock Broker, compare it with the weekly statement of account sent by Stock Broker and immediately raise a concern to the Exchange if you notice any discrepancy.`,
  },
  {
    id: 10,
    text: `Please do not transfer funds, for the purposes of trading to anyone, including an authorized person or an associate of the Stock Broker, other than a SEBI registered Stock Broker.`,
  },
  {
    id: 4,
    text: `Do not deal with unregistered intermediaries (who are not registered with SEBI/Exchanges)`,
  },
];

export const footerAdvisoryInvestors = [
  {
    id: 1,
    text: ` Ensure that pay-out of funds/securities is received in your account within 1 working day from the date of pay-out.`,
  },
  {
    id: 2,
    text: `Be careful while executing the PoA (Power of Attorney) - specify all the rights that the stock broker can exercise and timeframe for which PoA is valid. It may be noted that PoA is not a mandatory requirement as per SEBI / Exchanges. • Register for online applications viz Speed-e and Easiest provided by Depositories for online delivery of securities as an alternative to PoA.`,
  },
  {
    id: 3,
    text: ` Ensure that you receive Contract Notes within 24 hours of your trades and Statement of Account at least once in a quarter from your Stock Broker.`,
  },
  {
    id: 4,
    text: ` Please note that securities provided by you towards margin are not permitted to be pledged by your Stock Broker for raising funds.`,
  },
  {
    id: 5,
    text: `If you have opted for running account, please ensure that the stock broker settles your account regularly and in any case not later than 90 days (or 30 days if you have opted for 30 days settlement).`,
  },
  {
    id: 6,
    text: `Do not keep funds and securities idle with the Stock Broker.`,
  },
  {
    id: 7,
    text: `Regularly login into your account to verify balances and verify the demat statement received from depositories for correctness.`,
  },
  {
    id: 8,
    text: `Check messages sent by Exchanges on a monthly basis regarding funds and securities balances reported by the trading member and immediately raise a concern if you notice a discrepancy.`,
  },
  {
    id: 9,
    text: `Always keep your contact details viz Mobile number / Email ID updated with the stock broker. You may take up the matter with Stock Broker / Exchange if you are not receiving the messages from Exchange / Depositories regularly.`,
  },
  {
    id: 10,
    text: ` If you observe any discrepancies in your account or settlements, immediately take up the same with your stock broker and if the Stock Broker does not respond, with the Exchange/Depositories.`,
  },
];
