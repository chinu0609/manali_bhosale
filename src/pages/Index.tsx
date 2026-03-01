import { motion, type Variants } from "framer-motion";
import { Mail, Award, Briefcase, GraduationCap, Globe, ChevronDown, Star, Cloud, Users } from "lucide-react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <span className="font-serif text-xl font-bold text-foreground">MB</span>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
            <a href="#about" className="hover:text-foreground transition-colors">About</a>
            <a href="#experience" className="hover:text-foreground transition-colors">Experience</a>
            <a href="#skills" className="hover:text-foreground transition-colors">Skills</a>
            <a href="#education" className="hover:text-foreground transition-colors">Education</a>
            <a href="#achievements" className="hover:text-foreground transition-colors">Achievements</a>
            <a href="#contact" className="bg-gradient-gold text-primary-foreground px-5 py-2 rounded-full hover:opacity-90 transition-opacity">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="min-h-screen flex items-center justify-center section-padding pt-32 relative overflow-hidden">
        <div className="absolute top-20 right-0 w-96 h-96 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-20 left-0 w-72 h-72 rounded-full bg-gold-light/20 blur-3xl" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={0}
            className="inline-block mb-6 px-5 py-2 rounded-full bg-primary/10 text-sm font-medium text-foreground"
          >
            Team Lead · Operations Expert
          </motion.div>
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={1}
            className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold leading-tight mb-6"
          >
            Manali{" "}
            <span className="text-gradient-gold">Bhosale</span>
          </motion.h1>
          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={2}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Experienced Team Lead driving operational excellence across multinational environments. Award-winning leader passionate about quality, efficiency, and cross-cultural collaboration.
          </motion.p>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={3}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a href="#contact" className="bg-gradient-gold text-primary-foreground px-8 py-4 rounded-full font-semibold shadow-gold hover:opacity-90 transition-opacity">
              Get in Touch
            </a>
            <a href="#experience" className="border-2 border-border text-foreground px-8 py-4 rounded-full font-semibold hover:bg-secondary transition-colors">
              View Experience
            </a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="mt-16"
          >
            <ChevronDown className="w-6 h-6 mx-auto text-muted-foreground animate-bounce" />
          </motion.div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="section-padding bg-card">
        <div className="max-w-6xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4">
              About <span className="text-gradient-gold">Me</span>
            </h2>
            <div className="w-16 h-1 bg-gradient-gold rounded-full mb-8" />
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1} className="md:col-span-2">
              <p className="text-muted-foreground leading-relaxed text-lg mb-6">
                Experienced Team Lead with a strong track record in order management, client communication, and operational process management within multinational environments. Proven ability to lead and develop high-performing teams, streamline workflows, and ensure timely, accurate service delivery while maintaining exceptional quality standards.
              </p>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Extensive experience collaborating with international clients across the United States and Western Europe. Currently learning German to enhance cross-cultural communication. Highly organized and detail-oriented leader committed to driving operational excellence and continuous improvement.
              </p>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={2} className="space-y-4">
              {[
                { icon: Globe, label: "English, Marathi, Hindi" },
                { icon: Cloud, label: "AWS Certified" },
                { icon: Users, label: "Team Leadership" },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-3 p-4 rounded-xl bg-background border border-border">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-gold-dark" />
                  </div>
                  <span className="font-medium text-foreground">{label}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="section-padding">
        <div className="max-w-6xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4">
              Work <span className="text-gradient-gold">Experience</span>
            </h2>
            <div className="w-16 h-1 bg-gradient-gold rounded-full mb-12" />
          </motion.div>

          <div className="space-y-12">
            {[
              {
                title: "Team Lead",
                company: "Wipro Limited, Pune, India",
                period: "Present",
                points: [
                  "Leading a team in an order management project serving clients from the United States and Western Europe, ensuring accurate and timely processing of customer orders.",
                  "Managing daily operations, supervising team members, and ensuring adherence to quality standards and service level agreements.",
                  "Preparing and maintaining performance reports, tracking operational metrics, and ensuring consistent service delivery.",
                  "Acting as the primary point of contact for client communication, ensuring clear, professional, and effective stakeholder interaction.",
                  "Mentoring team members, improving team efficiency, and contributing to overall process improvement initiatives.",
                ],
              },
              {
                title: "Process Assistant",
                company: "Gallagher Operations Services, Kolhapur, India",
                period: "2016 – 2018",
                points: [
                  "Worked on backend insurance operations supporting US clients by updating and maintaining customer data including property, vehicle, and liability records.",
                  "Ensured data accuracy and integrity within internal systems to support insurance processing and policy management.",
                  "Collaborated with internal teams and client representatives to resolve data discrepancies and maintain accurate records.",
                  "Contributed to efficient workflow execution by maintaining proper documentation and ensuring timely task completion.",
                ],
              },
              {
                title: "Process Associate",
                company: "Infosys, Pune, India",
                period: "2015 – 2016",
                points: [
                  "Supported mortgage processing operations involving verification and management of loan-related documentation for US government-backed loans.",
                  "Maintained accurate loan records and ensured proper documentation throughout the approval lifecycle.",
                  "Coordinated with internal stakeholders to facilitate smooth and efficient processing of mortgage applications.",
                  "Ensured compliance with established operational procedures and quality standards.",
                ],
              },
            ].map((job, idx) => (
              <motion.div
                key={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={idx}
                className="relative pl-8 border-l-2 border-primary/30"
              >
                <div className="absolute left-[-9px] top-1 w-4 h-4 rounded-full bg-gradient-gold shadow-gold" />
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                  <h3 className="text-2xl font-serif font-bold text-foreground">{job.title}</h3>
                  <span className="text-sm font-medium px-4 py-1 rounded-full bg-primary/10 text-foreground mt-2 sm:mt-0 w-fit">{job.period}</span>
                </div>
                <p className="text-muted-foreground font-medium mb-4 flex items-center gap-2">
                  <Briefcase className="w-4 h-4 text-gold" /> {job.company}
                </p>
                <ul className="space-y-3">
                  {job.points.map((pt, i) => (
                    <li key={i} className="text-muted-foreground leading-relaxed flex gap-3">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                      {pt}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="section-padding bg-card">
        <div className="max-w-6xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4">
              Core <span className="text-gradient-gold">Skills</span>
            </h2>
            <div className="w-16 h-1 bg-gradient-gold rounded-full mb-12" />
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Leadership & Management",
                skills: ["Team Leadership", "Team Supervision", "Performance Monitoring", "Mentoring", "Team Coordination"],
                icon: Users,
              },
              {
                title: "Operations & Project Support",
                skills: ["Order Management", "Process Management", "Report Preparation", "Workflow Optimization", "Data Management"],
                icon: Briefcase,
              },
              {
                title: "Communication & Client Mgmt",
                skills: ["Client Communication", "Stakeholder Coordination", "Customer Relationship Mgmt", "Professional Communication"],
                icon: Globe,
              },
              {
                title: "Professional Skills",
                skills: ["Project Management", "Time Management", "Critical Thinking", "Problem Solving", "Public Relations", "Teamwork"],
                icon: Star,
              },
            ].map((cat, idx) => (
              <motion.div
                key={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={idx}
                className="p-6 rounded-2xl bg-background border border-border hover:shadow-gold transition-shadow duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                  <cat.icon className="w-6 h-6 text-gold-dark" />
                </div>
                <h3 className="font-serif font-bold text-lg mb-4 text-foreground">{cat.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((s) => (
                    <span key={s} className="text-xs px-3 py-1.5 rounded-full bg-secondary text-muted-foreground font-medium">
                      {s}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section id="education" className="section-padding">
        <div className="max-w-6xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4">
              Education & <span className="text-gradient-gold">Certifications</span>
            </h2>
            <div className="w-16 h-1 bg-gradient-gold rounded-full mb-12" />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: "Graduate Degree", institution: "Rajaram College, Kolhapur, India", period: "June 2012 – March 2015", icon: GraduationCap },
              { title: "Higher Secondary Education", institution: "New Model Junior College, Kolhapur, India", period: "July 2010 – February 2012", icon: GraduationCap },
              { title: "Secondary Education", institution: "Holy Cross Convent High School, Kolhapur, India", period: "June 2002 – March 2010", icon: GraduationCap },
              { title: "AWS Solution Architect Certification", institution: "Ethans Tech", period: "February 2023 – April 2023", icon: Cloud },
              { title: "Cloud Computing Certification", institution: "NovelVista Learning Solutions", period: "July 2022", icon: Cloud },
            ].map((edu, idx) => (
              <motion.div
                key={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={idx}
                className="p-6 rounded-2xl bg-card border border-border flex gap-5"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <edu.icon className="w-6 h-6 text-gold-dark" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-lg text-foreground">{edu.title}</h3>
                  <p className="text-muted-foreground text-sm mt-1">{edu.institution}</p>
                  <p className="text-xs text-warm-gray mt-2 font-medium">{edu.period}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section id="achievements" className="section-padding bg-card">
        <div className="max-w-6xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4">
              Achievements & <span className="text-gradient-gold">Learnings</span>
            </h2>
            <div className="w-16 h-1 bg-gradient-gold rounded-full mb-12" />
          </motion.div>

          <div className="space-y-6">
            {[
              {
                title: "100% Quality Performance Award",
                desc: "Recognized for consistently maintaining flawless accuracy and compliance standards throughout the year. Achieved zero quality errors across all assigned tasks, ensuring complete adherence to company policies, client requirements, and SLA commitments.",
              },
              {
                title: "Best Lead of the Year",
                desc: "Maintained consistent performance across high-volume workflows in a multinational environment, supporting international clients from the United States and Western Europe. Contributed to improved client satisfaction, reduced rework rates, and enhanced overall team quality metrics.",
              },
              {
                title: "German Language Proficiency",
                desc: "Currently pursuing German language learning to strengthen cross-cultural communication and expand capabilities within European markets. Actively developing proficiency in reading, listening, and speaking, with a focus on business communication.",
              },
              {
                title: "Cloud Technologies Certifications",
                desc: "Successfully completed certifications in AWS Solution Architecture and Cloud Computing, enhancing understanding of modern cloud infrastructure and enterprise technology environments.",
              },
              {
                title: "Leadership & Team Development",
                desc: "Demonstrated strong leadership capabilities by managing teams, mentoring team members, improving productivity, and ensuring consistent operational excellence. Supported team members by sharing best practices and conducting knowledge sessions.",
              },
            ].map((ach, idx) => (
              <motion.div
                key={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={idx}
                className="p-6 rounded-2xl bg-background border border-border flex gap-5"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-1">
                  <Award className="w-5 h-5 text-gold-dark" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-lg text-foreground mb-2">{ach.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{ach.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-gold opacity-5" />
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4">
              Let's <span className="text-gradient-gold">Connect</span>
            </h2>
            <div className="w-16 h-1 bg-gradient-gold rounded-full mb-8 mx-auto" />
            <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
              I'm always open to discussing new opportunities, collaborations, or simply connecting with like-minded professionals.
            </p>
            <a
              href="mailto:bhosalemanali11@gmail.com"
              className="inline-flex items-center gap-3 bg-gradient-gold text-primary-foreground px-6 sm:px-8 py-4 rounded-full font-semibold shadow-gold hover:opacity-90 transition-opacity text-base sm:text-lg max-w-full"
            >
              <Mail className="w-5 h-5 shrink-0" />
              <span className="truncate">bhosalemanali11@gmail.com</span>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-border text-center">
        <p className="text-sm text-muted-foreground">
          © 2026 Manali Bhosale. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Index;
