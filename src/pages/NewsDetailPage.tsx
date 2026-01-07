import { Calendar, ArrowLeft, User, Tag } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';

export default function NewsDetailPage() {
  const { id } = useParams();

  const newsArticles = [
    {
      id: 1,
      date: 'Dec 29, 2025',
      title: 'KASEDA Holds End-of-Year Management Meeting, Sets Direction for 2026',
      subtitle: 'Reviewing 2025 Milestones and Strengthening Support for MSMEs in Katsina State',
      fullContent: `On 29th December 2025, the Katsina State Enterprise Development Agency (KASEDA) held its End-of-Year Management Meeting, chaired by the Director General, Dr. Babangida Kabir Ruma. The meeting brought together the management team to comprehensively review activities, programmes, and milestones achieved throughout the year in line with the Agency's mandate to support Micro, Small, and Medium Enterprises (MSMEs) across Katsina State.

The session provided an opportunity to reflect on progress made in 2025, assess the impact of KASEDA's interventions, and draw valuable lessons from the experiences gained while working closely with entrepreneurs and business owners. Management engaged in open and constructive discussions on what worked well, identified areas that require improvement, and explored ways to further strengthen KASEDA's systems, programmes, and service delivery.

As part of the meeting, management also reviewed planned activities for 2026. Key focus areas include the expansion of training and capacity-building programmes, increased access to loans and micro-financing, deeper grassroots engagement, and the rollout of new initiatives aimed at reaching more entrepreneurs and strengthening local businesses across the state.

KASEDA encourages business owners and entrepreneurs to stay tuned for upcoming announcements and ensure full compliance with all required registration and documentation processes. The Agency remains firmly committed to empowering MSMEs and creating more opportunities for sustainable economic growth and development in Katsina State.`,
      image: '/news1.jpg',
      category: 'Management',
      author: 'KASEDA Press',
    },
    {
      id: 2,
      date: 'Dec 2025',
      title: 'From Waste to Wealth: KASEDA Graduate Launches Shoe Manufacturing Company',
      subtitle: 'Social Innovation Academy Alumnus Turns Skills Into Jobs and Sustainable Enterprise',
      fullContent: `As part of the Dikko Social Innovation Academy, a flagship entrepreneurship and skills development programme of the Katsina State Enterprise Development Agency (KASEDA), one of its outstanding graduates has successfully translated training into real economic impact by launching a shoe manufacturing company in Katsina. The enterprise is uniquely focused on converting waste materials into high-quality footwear, demonstrating innovation, sustainability, and practical problem-solving.

The young entrepreneur has already employed seven staff members, contributing directly to job creation and local economic development in the state. This achievement highlights the effectiveness of KASEDA's empowerment programmes in equipping participants with relevant, market-ready skills that can be transformed into viable businesses.

The company was officially commissioned by the Director General of KASEDA, Dr. Babangida Kabir Ruma, who expressed satisfaction with how the graduate applied the knowledge and techniques acquired during the programme. He described the milestone as a clear example of how well-structured empowerment initiatives can turn ideas into sustainable wealth and self-reliance.

In his remarks, Dr. Ruma commended the entrepreneur's dedication and innovation, while reaffirming KASEDA's commitment to providing continued support to help the business grow and scale. He also encouraged other trainees and beneficiaries of KASEDA programmes to draw inspiration from this success and work towards building independent and sustainable sources of livelihood.

The new shoe manufacturing company is located at Kofar Bai, behind the Old Stadium, Katsina, and stands as a testament to the impact of skills development, innovation, and entrepreneurship in driving inclusive economic growth across the state.`,
      image: '/news2.jpg',
      category: 'Success Story',
      author: 'KASEDA Press',
    },
    {
      id: 3,
      date: 'Jan 2026',
      title: 'KASEDA Convenes Implementation Committee Ahead of KGEF Launch',
      subtitle: 'Stakeholders Align on Framework for Katsina State Graduate Entrepreneurship Fund',
      fullContent: `Today, the Katsina State Government, through the Katsina State Enterprise Development Agency (KASEDA), convened an implementation committee meeting ahead of the official launch of the Katsina State Graduate Entrepreneurship Fund (KGEF). The meeting focused on developing clear, practical, and effective implementation mechanisms to ensure the smooth and transparent rollout of the programme.

The committee session was chaired by the Director General of KASEDA, Dr. Babangida Kabir Ruma, and held in the presence of key stakeholders, including Dr. Ibrahim Gani, Director of Enterprises at KASEDA; Engr. Surajo Yazid Abukur, Honourable Commissioner for Youth and Sports; and Dr. Aminu Bala, Executive Secretary of the Katsina State Asset Management Agency, alongside other relevant officials.

Discussions during the meeting centered on aligning institutional roles, operational processes, and accountability measures that will guide the successful execution of the Fund. These deliberations are critical to ensuring that the programme delivers real value to beneficiaries and achieves its intended impact across the state.

The Katsina State Graduate Entrepreneurship Fund (KGEF) is designed to provide interest-free soft loans to Katsina State indigene graduates of Degree, NCE, and Diploma programmes, using valid certificates or statements of results. The initiative aims to promote sustainable graduate entrepreneurship, reduce unemployment through self-employment, encourage increased enrolment in tertiary institutions, and stimulate economic growth through youth-led businesses.

KASEDA reaffirmed its commitment to transparency, accountability, and effective programme delivery as it continues to implement initiatives that empower young people and strengthen entrepreneurship across Katsina State.`,
      image: '/news3.jpg',
      category: 'Programs',
      author: 'KASEDA Press',
    },
  ];

  const article = newsArticles.find((news) => news.id === Number(id));

  if (!article) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Article Not Found</h1>
          <Link to="/news" className="text-green-700 hover:text-green-800 font-semibold">
            ← Back to All News
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Image */}
      <div className="relative h-96 bg-gray-900">
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="max-w-4xl mx-auto">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-green-700 text-white text-xs font-bold uppercase tracking-wide rounded-lg mb-4">
              <Tag size={12} />
              {article.category}
            </span>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Button */}
        <Link 
          to="/news"
          className="inline-flex items-center gap-2 text-green-700 hover:text-green-800 font-semibold mb-8 transition-colors"
        >
          <ArrowLeft size={20} />
          Back to All News
        </Link>

        {/* Article Header */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            {article.title}
          </h1>
          {article.subtitle && (
            <h2 className="text-xl text-gray-600 mb-6">
              {article.subtitle}
            </h2>
          )}

          <div className="flex items-center gap-6 text-sm text-gray-500 py-4 border-y border-gray-200">
            <div className="flex items-center gap-2">
              <Calendar size={16} className="text-green-600" />
              <span className="font-medium">{article.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <User size={16} className="text-green-600" />
              <span className="font-medium">{article.author}</span>
            </div>
          </div>
        </div>

        {/* Article Body */}
        <div className="prose prose-lg max-w-none">
          {article.fullContent.split('\n\n').map((paragraph, index) => (
            <p key={index} className="text-gray-700 leading-relaxed mb-6">
              {paragraph}
            </p>
          ))}
        </div>

        {/* Share Section */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex items-center justify-between">
            <Link 
              to="/news"
              className="inline-flex items-center gap-2 text-green-700 hover:text-green-800 font-semibold transition-colors"
            >
              <ArrowLeft size={20} />
              View All News
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
