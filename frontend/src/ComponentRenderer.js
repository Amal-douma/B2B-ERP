import React from 'react';
import { useParams } from 'react-router-dom';
import AnimationRevealPage from "helpers/AnimationRevealPage.js"

import EventLandingPage from "demos/EventLandingPage.js";
import HotelTravelLandingPage from "demos/HotelTravelLandingPage.js";
import AgencyLandingPage from "demos/AgencyLandingPage.js";
import SaaSProductLandingPage from "demos/SaaSProductLandingPage.js";
import RestaurantLandingPage from "demos/RestaurantLandingPage.js";
import ServiceLandingPage from "demos/ServiceLandingPage.js";
import HostingCloudLandingPage from "demos/HostingCloudLandingPage.js";

import EventLandingPageImageSrc from "images/demo/EventLandingPage.jpeg";
import HotelTravelLandingPageImageSrc from "images/demo/HotelTravelLandingPage.jpeg";
import AgencyLandingPageImageSrc from "images/demo/AgencyLandingPage.jpeg";
import SaaSProductLandingPageImageSrc from "images/demo/SaaSProductLandingPage.jpeg";
import RestaurantLandingPageImageSrc from "images/demo/RestaurantLandingPage.jpeg";
import ServiceLandingPageImageSrc from "images/demo/ServiceLandingPage.jpeg";
import HostingCloudLandingPageImageSrc from "images/demo/HostingCloudLandingPage.jpeg";


// import LoginAdminPage from "pages/LoginAdmin.js";
import LoginPage from "pages/Login.js";
import SignupPage from "pages/Signup.js";
import PricingPage from "pages/Pricing.js";
import AboutUsPage from "pages/AboutUs.js";
import ContactUsPage from "pages/ContactUs.js";
import BlogIndexPage from "pages/BlogIndex.js";
import TermsOfServicePage from "pages/TermsOfService.js";
import PrivacyPolicyPage from "pages/PrivacyPolicy.js";



import LoginPageImageSrc from "images/demo/LoginPage.jpeg";
import SignupPageImageSrc from "images/demo/SignupPage.jpeg";
import PricingPageImageSrc from "images/demo/PricingPage.jpeg";
import AboutUsPageImageSrc from "images/demo/AboutUsPage.jpeg";
import ContactUsPageImageSrc from "images/demo/ContactUsPage.jpeg";
import BlogIndexPageImageSrc from "images/demo/BlogIndexPage.jpeg";
import TermsOfServicePageImageSrc from "images/demo/TermsOfServicePage.jpeg";
import PrivacyPolicyPageImageSrc from "images/demo/PrivacyPolicyPage.jpeg";

import ListeArticles from "components/hero/ListeArticles.js";
import Panier from "components/hero/Panier.js";
import Commande from "components/hero/Commande.js";
import IllustrationAndInputHero from "components/hero/TwoColumnWithInput.js";
import FeaturesAndTestimonialHero from "components/hero/TwoColumnWithFeaturesAndTestimonial.js";
import FullWidthWithImageHero from "components/hero/FullWidthWithImage.js";
import BackgroundAsImageWithCenteredContentHero from "components/hero/BackgroundAsImageWithCenteredContent.js";
import IllustrationAndPrimaryBackgroundHero from "components/hero/TwoColumnWithPrimaryBackground.js";

import TwoPlansWithDurationSwitcherPricing from "components/pricing/TwoPlansWithDurationSwitcher.js";
import ThreePlansWithHalfPrimaryBackgroundPricing from "components/pricing/ThreePlansWithHalfPrimaryBackground.js";
import ThreePlansPricing from "components/pricing/ThreePlans.js";

import LandingPageFeatures from "components/features/LandingPageFeatures.js";
import TwoColWithButtonFeatures from "components/features/TwoColWithButton.js";
import ThreeColSimpleFeatures from "components/features/ThreeColSimple.js";
import ThreeColWithSideImageWithPrimaryBackgroundFeatures from "components/features/ThreeColWithSideImageWithPrimaryBackground.js";
import TwoColVerticalWithButtonFeatures from "components/features/TwoColWithTwoFeaturesAndButtons.js";
import TwoColHorizontalWithButtonFeatures from "components/features/TwoColWithTwoHorizontalFeaturesAndButton.js";
import WithStepsAndImageFeatures from "components/features/TwoColWithSteps.js";
import ThreeColumnDashedBorderFeatures from "components/features/DashedBorderSixFeatures";
import ThreeColCenteredStatsWithPrimaryBackgroundFeatures from "components/features/ThreeColCenteredStatsPrimaryBackground.js";
import WithStatsAndImageFeatures from "components/features/TwoColSingleFeatureWithStats.js";
import WithStatsAndImage2Features from "components/features/TwoColSingleFeatureWithStats2.js";
import VerticalWithAlternateImageAndTextFeatures from "components/features/VerticalWithAlternateImageAndText.js";

import SliderCards from "components/cards/ThreeColSlider.js";
import TrendingCards from "components/cards/TwoTrendingPreviewCardsWithImage.js";
import PortfolioCards from "components/cards/PortfolioTwoCardsWithImage.js";
import TabGridCards from "components/cards/TabCardGrid.js";
import ProfileThreeColGridCards from "components/cards/ProfileThreeColGrid.js"
import ThreeColContactDetailsCards from "components/cards/ThreeColContactDetails.js"

import ThreeColSimpleWithImageBlog from "components/blogs/ThreeColSimpleWithImage.js";
import ThreeColSimpleWithImageAndDashedBorderBlog from "components/blogs/ThreeColSimpleWithImageAndDashedBorder.js";
import PopularAndRecentPostsBlog from "components/blogs/PopularAndRecentBlogPosts.js";
import GridWithFeaturedPostBlog from "components/blogs/GridWithFeaturedPost.js";

import TwoColumnWithImageTestimonial from "components/testimonials/TwoColumnWithImage.js";
import TwoColumnWithImageAndProfilePictureReviewTestimonial from "components/testimonials/TwoColumnWithImageAndProfilePictureReview.js";
import TwoColumnWithImageAndRatingTestimonial from "components/testimonials/TwoColumnWithImageAndRating.js";
import ThreeColumnWithProfileImageTestimonial from "components/testimonials/ThreeColumnWithProfileImage.js";
import SimplePrimaryBackgroundTestimonial from "components/testimonials/SimplePrimaryBackground.js";

import SimpleWithSideImageFAQS from "components/faqs/SimpleWithSideImage.js";
import PanierCols from "components/faqs/PanierCols.js";
import TwoColumnPrimaryBackgroundFAQS from "components/faqs/TwoColumnPrimaryBackground.js";

import SimpleContactUsForm from "components/forms/SimpleContactUs.js";
import SimpleSubscribeNewsletterForm from "components/forms/SimpleSubscribeNewsletter.js";
import TwoColContactUsForm from "components/forms/TwoColContactUsWithIllustration.js";
import TwoColContactUsFullForm from "components/forms/TwoColContactUsWithIllustrationFullForm.js";



import GetStartedCTA from "components/cta/GetStarted.js";
import GetStartedLightCTA from "components/cta/GetStartedLight.js";
import DownloadAppCTA from "components/cta/DownloadApp.js";

import SimpleFiveColumnFooter from "components/footers/SimpleFiveColumn.js";
import FiveColumnWithInputFormFooter from "components/footers/FiveColumnWithInputForm.js";
import FiveColumnWithBackgroundFooter from "components/footers/FiveColumnWithBackground.js";
import FiveColumnDarkFooter from "components/footers/FiveColumnDark.js";
import LandingPageFooter from "components/footers/LandingPageFooter.js";

// import List from 'components/global/list/List.js';
import topbar from "components/global/navbar/Navbar.js";
import sidbar from "components/global/sidebar/sidbar.js";
import Produit from 'components/global/produit'
import Dashbord from 'components/global/Dashbord';
import users from 'components/global/users/users';
import adduser from 'components/global/adduser';


export const components = {
  landingPages: {
    RestaurantLandingPage: {
      component: RestaurantLandingPage,
      imageSrc: RestaurantLandingPageImageSrc,
      url: "/components/landingPages/RestaurantLandingPage",
    },
    HotelTravelLandingPage: {
      component: HotelTravelLandingPage,
      imageSrc: HotelTravelLandingPageImageSrc,
      url: "/components/landingPages/HotelTravelLandingPage",
    },
    SaaSProductLandingPage: {
      component: SaaSProductLandingPage,
      imageSrc: SaaSProductLandingPageImageSrc,
      url: "/components/landingPages/SaaSProductLandingPage",
    },
    ServiceLandingPage: {
      component: ServiceLandingPage,
      imageSrc: ServiceLandingPageImageSrc,
      url: "/components/landingPages/ServiceLandingPage",
    },
    EventLandingPage: {
      component: EventLandingPage,
      imageSrc: EventLandingPageImageSrc,
      url: "/components/landingPages/EventLandingPage",
    },
    AgencyLandingPage: {
      component: AgencyLandingPage,
      imageSrc: AgencyLandingPageImageSrc,
      url: "/components/landingPages/AgencyLandingPage",
    },
    HostingCloudLandingPage: {
      component: HostingCloudLandingPage,
      imageSrc: HostingCloudLandingPageImageSrc,
      url: "/components/landingPages/HostingCloudLandingPage",
    },
  },



  innerPages: {

    // LoginAdminPage: {
    //   component: LoginAdminPage,
    //   imageSrc: LoginPageImageSrc,
    //   scrollAnimationDisabled: true,
    //   url: "/components/innerPages/LoginAdminPage",
    // },
    LoginPage: {
      component: LoginPage,
      imageSrc: LoginPageImageSrc,
      scrollAnimationDisabled: true,
      url: "/components/innerPages/LoginPage",
    },
    SignupPage: {
      component: SignupPage,
      url: `/components/innerPages/SignupPage`,
      imageSrc: SignupPageImageSrc,
      scrollAnimationDisabled: true,
    },
    PricingPage: {
      component: PricingPage,
      url: `/components/innerPages/PricingPage`,
      imageSrc: PricingPageImageSrc,
    },
    AboutUsPage: {
      component: AboutUsPage,
      url: `/components/innerPages/AboutUsPage`,
      imageSrc: AboutUsPageImageSrc,
    },
    ContactUsPage: {
      component: ContactUsPage,
      url: `/components/innerPages/ContactUsPage`,
      imageSrc: ContactUsPageImageSrc,
    },
    BlogIndexPage: {
      component: BlogIndexPage,
      url: `/components/innerPages/BlogIndexPage`,
      imageSrc: BlogIndexPageImageSrc,
    },
    TermsOfServicePage: {
      component: TermsOfServicePage,
      url: `/components/innerPages/TermsOfServicePage`,
      imageSrc: TermsOfServicePageImageSrc,
    },
    PrivacyPolicyPage: {
      component: PrivacyPolicyPage,
      url: `/components/innerPages/PrivacyPolicyPage`,
      imageSrc: PrivacyPolicyPageImageSrc,
    }
  },
  blocks: {
    Hero: {
      type: "Hero Section",
      elements: {
        ListeArticles: {
          name: "ListeArticles",
          component: ListeArticles,
          url: "/components/blocks/Hero/ListeArticles",
        },
        IllustrationAndInput: {
          name: "With Image Illustration and Input",
          component: IllustrationAndInputHero,
          url: "/components/blocks/Hero/IllustrationAndInput",
        },
        Panier: {
          name: "Panier",
          component: Panier,
          url: "/components/blocks/Hero/Panier",
        },
        Commande: {
          name: "Commande",
          component: Commande,
          url: "/components/blocks/Hero/Commande",
        },
        FeaturesAndTestimonial: {
          name: "With Features And Customer Testimonial",
          component: FeaturesAndTestimonialHero,
          url: "/components/blocks/Hero/FeaturesAndTestimonial",
        },
        FullWidthWithImage: {
          name: "Full Width With Image",
          component: FullWidthWithImageHero,
          url: "/components/blocks/Hero/FullWidthWithImage",
        },
        BackgroundAsImageWithCenteredContent: {
          name: "Full Width Background Image with centered content",
          component: BackgroundAsImageWithCenteredContentHero,
          url: "/components/blocks/Hero/BackgroundAsImageWithCenteredContent",
        },
        IllustrationAndPrimaryBackground: {
          name: "Primary Background With Illustration",
          component: IllustrationAndPrimaryBackgroundHero,
          url: "/components/blocks/Hero/IllustrationAndPrimaryBackground",
        },
      }
    },

    Pricing: {
      type: "Pricing Section",
      elements: {
        TwoPlansWithDurationSwitcher: {
          name: "Two Plans With Duration Switcher",
          component: TwoPlansWithDurationSwitcherPricing,
          url: "/components/blocks/Pricing/TwoPlansWithDurationSwitcher",
        },
        ThreePlansWithHalfPrimaryBackground: {
          name: "Three Plans With Primary Background at Top",
          component: ThreePlansWithHalfPrimaryBackgroundPricing,
          url: "/components/blocks/Pricing/ThreePlansWithHalfPrimaryBackground",
        },
        ThreePlans: {
          name: "Simple Three Plans",
          component: ThreePlansPricing,
          url: "/components/blocks/Pricing/ThreePlans",
        },
      }
    },
    Features: {
      type: "Features Section",
      elements: {
        ThreeColWithSideImage: {
          name: "Features for Landing Page",
          component: LandingPageFeatures,
          url: "/components/blocks/Features/LandingPageFeatures",
        },
        TwoColWithButton: {
          name: "Two Column With Image and Action Button",
          component: TwoColWithButtonFeatures,
          url: "/components/blocks/Features/TwoColWithButton",
        },
        ThreeColSimple: {
          name: "Three Column Simple",
          component: ThreeColSimpleFeatures,
          url: "/components/blocks/Features/ThreeColSimple",
        },
        ThreeColWithSideImageWithPrimaryBackground: {
          name: "Three Column With Side Image With Primary Background",
          component: ThreeColWithSideImageWithPrimaryBackgroundFeatures,
          url: "/components/blocks/Features/ThreeColWithSideImageWithPrimaryBackground",
        },
        TwoColHorizontalWithButton: {
          name: "Two Column With Button and Horizonatal Features with Icon",
          component: TwoColHorizontalWithButtonFeatures,
          url: "/components/blocks/Features/TwoColHorizontalWithButton",
        },
        TwoColVerticalWithButton: {
          name: "Two Column With Vertical Features and Button",
          component: TwoColVerticalWithButtonFeatures,
          url: "/components/blocks/Features/TwoColVerticalWithButton",
        },
        WithStepsAndImage: {
          name: "Steps with Image",
          component: WithStepsAndImageFeatures,
          url: "/components/blocks/Features/WithStepsAndImage",
        },
        ThreeColumnDashedBorder: {
          name: "Three Column With Dashed Primary Border",
          component: ThreeColumnDashedBorderFeatures,
          url: "/components/blocks/Features/ThreeColumnDashedBorder",
        },
        ThreeColCenteredStatsPrimaryBackground: {
          name: "Three Column With Centered Stats on Primary Background",
          component: ThreeColCenteredStatsWithPrimaryBackgroundFeatures,
          url: "/components/blocks/Features/ThreeColCenteredStatsPrimaryBackground",
        },
        WithStatsAndImage: {
          name: "Stats With Image",
          component: WithStatsAndImageFeatures,
          url: "/components/blocks/Features/WithStatsAndImage",
        },
        WithStatsAndImage2: {
          name: "Stats With Image 2",
          component: WithStatsAndImage2Features,
          url: "/components/blocks/Features/WithStatsAndImage2",
        },
        VerticalWithAlternateImageAndText: {
          name: "Vertical Feature Cards With Alternate Image and Text",
          component: VerticalWithAlternateImageAndTextFeatures,
          url: "/components/blocks/Features/VerticalWithAlternateImageAndText",
        },
      }
    },
    Cards: {
      type: "Cards",
      elements: {
        Slider: {
          name: "Three Column Slider",
          component: SliderCards,
          url: "/components/blocks/Cards/Slider",
        },
        Portfolio: {
          name: "Two Column Portfolio Cards With Images ",
          component: PortfolioCards,
          url: "/components/blocks/Cards/Portfolio",
        },
        TabGrid: {
          name: "Tab Card Grid With Tab Switcher",
          component: TabGridCards,
          url: "/components/blocks/Cards/TabGrid",
        },
        ProfileThreeColGrid: {
          name: "Three Column Grid Cards For Profile",
          component: ProfileThreeColGridCards,
          url: "/components/blocks/Cards/ProfileThreeColGrid",
        },
        ThreeColContactDetails: {
          name: "Three Column Contact Details Cards",
          component: ThreeColContactDetailsCards,
          url: "/components/blocks/Cards/ThreeColContactDetails",
        },
        Trending: {
          name: "Two Trending Preview Cards With Images",
          component: TrendingCards,
          url: "/components/blocks/Cards/Trending",
        },
      }
    },

    Blog: {
      type: "Blog Section",
      elements: {
        GridWithFeaturedPost: {
          name: "Grid With Featured Post",
          component: GridWithFeaturedPostBlog,
          url: "/components/blocks/Blog/GridWithFeaturedPost",
        },
        PopularAndRecentPosts: {
          name: "Popular And Recent Posts",
          component: PopularAndRecentPostsBlog,
          url: "/components/blocks/Blog/PopularAndRecentPosts",
        },
        ThreeColSimpleWithImage: {
          name: "Simple Three Column With Image",
          component: ThreeColSimpleWithImageBlog,
          url: "/components/blocks/Blog/ThreeColSimpleWithImage",
        },
        ThreeColSimpleWithImageAndDashedBorder: {
          name: "Simple Three Column With Image and Dashed Border",
          component: ThreeColSimpleWithImageAndDashedBorderBlog,
          url: "/components/blocks/Blog/ThreeColSimpleWithImageAndDashedBorder",
        },
      }
    },

    Testimonial: {
      type: "Testimonial Section",
      elements: {
        TwoColumnWithImage: {
          name: "Two Column With Image",
          component: TwoColumnWithImageTestimonial,
          url: "/components/blocks/Testimonial/TwoColumnWithImage",
        },
        TwoColumnWithImageAndProfilePictureReview: {
          name: "Two Column With Image And Profile Picture Review",
          component: TwoColumnWithImageAndProfilePictureReviewTestimonial,
          url: "/components/blocks/Testimonial/TwoColumnWithImageAndProfilePictureReview",
        },
        TwoColumnWithImageAndRating: {
          name: "Two Column With Image And Rating",
          component: TwoColumnWithImageAndRatingTestimonial,
          url: "/components/blocks/Testimonial/TwoColumnWithImageAndRating",
        },
        ThreeColumnWithProfileImage: {
          name: "Three Column With Profile Image",
          component: ThreeColumnWithProfileImageTestimonial,
          url: "/components/blocks/Testimonial/ThreeColumnWithProfileImage",
        },
        SimplePrimaryBackground: {
          name: "Simple With Primary Background",
          component: SimplePrimaryBackgroundTestimonial,
          url: "/components/blocks/Testimonial/SimplePrimaryBackground",
        },
      }
    },

    global: {
      type: "global section",
      elements: {
        topbar: {
          name: "Topbar dashboard",
          component: topbar,
          url: "/components/blocks/global/topbar",
        },
        sidbar: {
          name: "Sidebar dashboard",
          component: sidbar,
          url: "/components/blocks/global/sidbar",
        },
        Produit: {
          name: "Produit",
          component: Produit,
          url: "/components/blocks/global/Produit"
        },
        Dashbord: {
          name: "Dashbord",
          component: Dashbord,
          url: "/components/blocks/global/Dashbord"
        },
        users: {
          name: "users",
          component: users,
          url: "/components/blocks/global/users"
        },
        adduser: {
          name: "adduser",
          component: adduser,
          url: "/components/blocks/global/adduser"
        },

      }
    },
    FAQS: {
      type: "FAQs Section",
      elements: {
        SimpleWithSideImage: {
          name: "Simple With Side Image",
          component: SimpleWithSideImageFAQS,
          url: "/components/blocks/FAQS/SimpleWithSideImage",
        },
        PanierCols: {
          name: "PanierCols",
          component: PanierCols,
          url: "/components/blocks/FAQS/PanierCols",
        },
        TwoColumnPrimaryBackground: {
          name: "Two Column With Primary Background",
          component: TwoColumnPrimaryBackgroundFAQS,
          url: "/components/blocks/FAQS/TwoColumnPrimaryBackground",
        },
      }
    },

    Form: {
      type: "Forms Section",
      elements: {
        SimpleContactUs: {
          name: "Simple Contact Us",
          component: SimpleContactUsForm,
          url: "/components/blocks/Form/SimpleContactUs",
        },
        SimpleSubscribeNewsletter: {
          name: "Simple Subscribe newsletter",
          component: SimpleSubscribeNewsletterForm,
          url: "/components/blocks/Form/SimpleSubscribeNewsletter",
        },
        TwoColContactUs: {
          name: "Two Column Contact Us",
          component: TwoColContactUsForm,
          url: "/components/blocks/Form/TwoColContactUs",
        },
        TwoColContactUsFull: {
          name: "Two Column Contact Us - Full Form",
          component: TwoColContactUsFullForm,
          url: "/components/blocks/Form/TwoColContactUsFull",
        },
      }
    },

    CTA: {
      type: "CTA Section",
      elements: {
        GetStarted: {
          name: "Get Started",
          component: GetStartedCTA,
          url: "/components/blocks/CTA/GetStarted",
        },
        GetStartedLight: {
          name: "Get Started Light",
          component: GetStartedLightCTA,
          url: "/components/blocks/CTA/GetStartedLight",
        },
        DownloadApp: {
          name: "Download App",
          component: DownloadAppCTA,
          url: "/components/blocks/CTA/DownloadApp",
        },
      }
    },

    Footer: {
      type: "Footers Section",
      elements: {
        SimpleFiveColumn: {
          name: "Simple Five Column",
          component: SimpleFiveColumnFooter,
          url: "/components/blocks/Footer/SimpleFiveColumn",
        },
        FiveColumnWithInputForm: {
          name: "Five Column With Input Form",
          component: FiveColumnWithInputFormFooter,
          url: "/components/blocks/Footer/FiveColumnWithInputForm",
        },
        FiveColumnWithBackground: {
          name: "Five Column With background",
          component: FiveColumnWithBackgroundFooter,
          url: "/components/blocks/Footer/FiveColumnWithBackground",
        },
        FiveColumnDark: {
          name: "Five Column Dark",
          component: FiveColumnDarkFooter,
          url: "/components/blocks/Footer/FiveColumnDark",
        },
        LandingPageFooter: {
          name: "LandingPageFooter",
          component: LandingPageFooter,
          url: "/components/blocks/Footer/LandingPageFooter",
        },
      }
    }
  }
}

export default () => {
  const { type, subtype, name } = useParams()

  try {
    let Component = null;
    if (type === "blocks" && subtype) {
      Component = components[type][subtype]["elements"][name].component
      return <AnimationRevealPage disabled>
        <Component />
      </AnimationRevealPage>
    }
    else
      Component = components[type][name].component

    if (Component)
      return <Component />

    throw new Error("Component Not Found")
  }
  catch (e) {
    console.log(e)
    return <div>Error: Component Not Found</div>
  }
}
