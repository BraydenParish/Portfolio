import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Github, Linkedin, Mail, MapPin, Phone, Terminal, User, Code, Server, Shield, Cloud } from "lucide-react"
import Link from "next/link"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-black text-green-400 font-mono">
      {/* Header */}
      <header className="border-b border-green-900/30 bg-black/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Terminal className="w-6 h-6 text-green-400" />
              <span className="text-xl font-bold">~/portfolio</span>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <Link href="#about" className="hover:text-green-300 transition-colors">
                ./about
              </Link>
              <Link href="#skills" className="hover:text-green-300 transition-colors">
                ./skills
              </Link>
              <Link href="#projects" className="hover:text-green-300 transition-colors">
                ./projects
              </Link>
              <Link href="#contact" className="hover:text-green-300 transition-colors">
                ./contact
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <div className="text-green-500 mb-2">user@portfolio:~$</div>
            <div className="text-4xl md:text-6xl font-bold mb-4 text-white">whoami</div>
            <div className="text-xl md:text-2xl mb-6 text-green-300">{"> Brayden Parish"}</div>
            <div className="text-lg text-gray-300 mb-8 leading-relaxed">
              IT Professional | Help Desk Specialist | Future Cloud Engineer
              <br />
              <span className="text-green-400">{"> "}</span>
              Passionate about technology, problem-solving, and continuous learning
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <Button variant="outline" className="bg-green-400 text-black hover:bg-green-400 hover:text-black">
              <Mail className="w-4 h-4 mr-2" />
              Contact Me
            </Button>
            <Button variant="outline" className="bg-green-400 text-black hover:bg-green-400 hover:text-black">
              <Github className="w-4 h-4 mr-2" />
              GitHub
            </Button>
            <Button variant="outline" className="bg-green-400 text-black hover:bg-green-400 hover:text-black">
              <Linkedin className="w-4 h-4 mr-2" />
              LinkedIn
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="container mx-auto px-4 py-16 border-t border-green-900/30">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <div className="text-green-500 mb-2">user@portfolio:~$</div>
            <h2 className="text-3xl font-bold text-white mb-6">cat about.txt</h2>
          </div>

          <Card className="bg-gray-900/50 border-green-900/30 text-gray-300">
            <CardContent className="p-6">
              <div className="space-y-4">
                <p>
                  <span className="text-green-400">{"> "}</span>
                  As a lifelong computer user, my fascination with technology deepened when I began exploring Linux
                  environments. Learning to navigate the command line, manage packages, and troubleshoot system
                  configurations solidified my passion for understanding how technology works from the ground up.
                </p>
                <p>
                  <span className="text-green-400">{"> "}</span>
                  Throughout my personal computing journey, I've consistently enjoyed the challenge of diagnosing and
                  resolving technical issues, from software conflicts to network connectivity problems. This innate
                  curiosity for problem-solving is what draws me to IT support. My studies towards a Computer Science
                  degree at WGU are providing a strong theoretical foundation that complements my practical IT
                  interests.
                </p>
                <p>
                  <span className="text-green-400">{"> "}</span>I am actively seeking an IT Help Desk/Technical Support
                  role where I can apply my troubleshooting skills, technical aptitude, and commitment to user
                  satisfaction. I'm eager to contribute to a team, learn industry best practices, and build a strong
                  foundation for a career in IT, with a long-term goal of specializing in cloud engineering.
                </p>
                <p>
                  <span className="text-green-400">{"> "}</span>
                  To actively develop these skills, I'm focusing on practical projects such as building and configuring
                  ticketing systems, working with Active Directory, and implementing foundational cloud solutions.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="container mx-auto px-4 py-16 border-t border-green-900/30">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <div className="text-green-500 mb-2">user@portfolio:~$</div>
            <h2 className="text-3xl font-bold text-white mb-6">ls -la skills/</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="bg-gray-900/50 border-green-900/30">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-green-400">
                  <User className="w-5 h-5" />
                  Help Desk & Support
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Badge variant="outline" className="border-green-400 text-green-400">
                    Troubleshooting
                  </Badge>
                  <Badge variant="outline" className="border-green-400 text-green-400">
                    Customer Service
                  </Badge>
                  <Badge variant="outline" className="border-green-400 text-green-400">
                    Ticket Management
                  </Badge>
                  <Badge variant="outline" className="border-green-400 text-green-400">
                    Remote Support
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/50 border-green-900/30">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-green-400">
                  <Server className="w-5 h-5" />
                  Systems
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Badge variant="outline" className="border-green-400 text-green-400">
                    Windows 10/11
                  </Badge>
                  <Badge variant="outline" className="border-green-400 text-green-400">
                    Linux (Ubuntu/Debian)
                  </Badge>
                  <Badge variant="outline" className="border-green-400 text-green-400">
                    Active Directory
                  </Badge>
                  <Badge variant="outline" className="border-green-400 text-green-400">
                    PowerShell
                  </Badge>
                  <Badge variant="outline" className="border-green-400 text-green-400">
                    Virtualization (VMware/VirtualBox)
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/50 border-green-900/30">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-green-400">
                  <Shield className="w-5 h-5" />
                  Networking
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Badge variant="outline" className="border-green-400 text-green-400">
                    TCP/IP
                  </Badge>
                  <Badge variant="outline" className="border-green-400 text-green-400">
                    DNS
                  </Badge>
                  <Badge variant="outline" className="border-green-400 text-green-400">
                    DHCP
                  </Badge>
                  <Badge variant="outline" className="border-green-400 text-green-400">
                    VPN Basics
                  </Badge>
                  <Badge variant="outline" className="border-green-400 text-green-400">
                    Firewall Concepts
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/50 border-green-900/30">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-green-400">
                  <Cloud className="w-5 h-5" />
                  Cloud Technologies
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Badge variant="outline" className="border-green-400 text-green-400">
                    AWS Basics (S3, EC2)
                  </Badge>
                  <Badge variant="outline" className="border-green-400 text-green-400">
                    Azure Fundamentals
                  </Badge>
                  <Badge variant="outline" className="border-green-400 text-green-400">
                    Cloud Concepts
                  </Badge>
                  <Badge variant="outline" className="border-green-400 text-green-400">
                    IaaS/PaaS/SaaS
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/50 border-green-900/30">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-green-400">
                  <Code className="w-5 h-5" />
                  Programming & Scripting
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Badge variant="outline" className="border-green-400 text-green-400">
                    Python (Basics)
                  </Badge>
                  <Badge variant="outline" className="border-green-400 text-green-400">
                    Bash (Basics)
                  </Badge>
                  <Badge variant="outline" className="border-green-400 text-green-400">
                    HTML/CSS
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/50 border-green-900/30">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-green-400">
                  <Terminal className="w-5 h-5" />
                  IT Tools
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Badge variant="outline" className="border-green-400 text-green-400">
                    Git
                  </Badge>
                  <Badge variant="outline" className="border-green-400 text-green-400">
                    Office 365
                  </Badge>
                  <Badge variant="outline" className="border-green-400 text-green-400">
                    VS Code
                  </Badge>
                  <Badge variant="outline" className="border-green-400 text-green-400">
                    osTicket
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="container mx-auto px-4 py-16 border-t border-green-900/30">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <div className="text-green-500 mb-2">user@portfolio:~$</div>
            <h2 className="text-3xl font-bold text-white mb-6">ls projects/</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-gray-900/50 border-green-900/30">
              <CardHeader>
                <CardTitle className="text-green-400">Active Directory Home Lab</CardTitle>
                <CardDescription className="text-gray-400">Simulating a small business IT environment</CardDescription>
              </CardHeader>
              <CardContent className="text-gray-300">
                <p className="mb-4">
                  Set up a Windows Server VM to install and configure Active Directory Domain Services. Created OUs,
                  users, groups, and configured basic Group Policies to practice centralized user and computer
                  management.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="bg-green-900/30 text-green-400">
                    Windows Server
                  </Badge>
                  <Badge variant="secondary" className="bg-green-900/30 text-green-400">
                    Active Directory
                  </Badge>
                  <Badge variant="secondary" className="bg-green-900/30 text-green-400">
                    Group Policy
                  </Badge>
                  <Badge variant="secondary" className="bg-green-900/30 text-green-400">
                    Virtualization
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/50 border-green-900/30">
              <CardHeader>
                <CardTitle className="text-green-400">IT Ticketing System Setup</CardTitle>
                <CardDescription className="text-gray-400">
                  Configuring osTicket for IT support simulation
                </CardDescription>
              </CardHeader>
              <CardContent className="text-gray-300">
                <p className="mb-4">
                  Installed and configured osTicket on a local VM. Defined departments, established basic SLAs, and
                  processed sample tickets to understand IT support workflows and ticket lifecycle management.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="bg-green-900/30 text-green-400">
                    osTicket
                  </Badge>
                  <Badge variant="secondary" className="bg-green-900/30 text-green-400">
                    Help Desk
                  </Badge>
                  <Badge variant="secondary" className="bg-green-900/30 text-green-400">
                    ITSM
                  </Badge>
                  <Badge variant="secondary" className="bg-green-900/30 text-green-400">
                    Virtualization
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/50 border-green-900/30">
              <CardHeader>
                <CardTitle className="text-green-400">Secure Cloud Storage with AWS S3</CardTitle>
                <CardDescription className="text-gray-400">Implementing secure file storage on AWS</CardDescription>
              </CardHeader>
              <CardContent className="text-gray-300">
                <p className="mb-4">
                  Configured an Amazon S3 bucket for secure data storage. Implemented bucket policies and IAM user
                  permissions to control access, demonstrating foundational cloud security practices.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="bg-green-900/30 text-green-400">
                    AWS
                  </Badge>
                  <Badge variant="secondary" className="bg-green-900/30 text-green-400">
                    S3
                  </Badge>
                  <Badge variant="secondary" className="bg-green-900/30 text-green-400">
                    IAM
                  </Badge>
                  <Badge variant="secondary" className="bg-green-900/30 text-green-400">
                    Cloud Security
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/50 border-green-900/30">
              <CardHeader>
                <CardTitle className="text-green-400">Help Desk Troubleshooting Guide</CardTitle>
                <CardDescription className="text-gray-400">Documenting solutions for common IT issues</CardDescription>
              </CardHeader>
              <CardContent className="text-gray-300">
                <p className="mb-4">
                  Developed a series of step-by-step troubleshooting guides for common Help Desk scenarios (e.g.,
                  'Cannot Print,' 'Slow Internet'). This project focuses on clear communication and knowledge sharing.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="bg-green-900/30 text-green-400">
                    Documentation
                  </Badge>
                  <Badge variant="secondary" className="bg-green-900/30 text-green-400">
                    Troubleshooting
                  </Badge>
                  <Badge variant="secondary" className="bg-green-900/30 text-green-400">
                    Knowledge Base
                  </Badge>
                  <Badge variant="secondary" className="bg-green-900/30 text-green-400">
                    Process Improvement
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container mx-auto px-4 py-16 border-t border-green-900/30">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <div className="text-green-500 mb-2">user@portfolio:~$</div>
            <h2 className="text-3xl font-bold text-white mb-6">cat contact.txt</h2>
          </div>

          <Card className="bg-gray-900/50 border-green-900/30">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-green-400 mb-4">Get In Touch</h3>
                  <p className="text-gray-300 mb-6">
                    Ready to start my IT career and contribute to your team. Let's connect and discuss how I can help
                    solve your technical challenges.
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-center gap-3 text-gray-300">
                      <Mail className="w-5 h-5 text-green-400" />
                      <span>brayden.parish@email.com</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-300">
                      <Phone className="w-5 h-5 text-green-400" />
                      <span>(555) 123-4567</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-300">
                      <MapPin className="w-5 h-5 text-green-400" />
                      <span>Your City, State</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-green-400 mb-4">Connect Online</h3>
                  <div className="space-y-4">
                    <Button
                      variant="outline"
                      className="w-full justify-start border-green-400 text-green-400 hover:bg-green-400 hover:text-black"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      GitHub Profile
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full justify-start border-green-400 text-green-400 hover:bg-green-400 hover:text-black"
                    >
                      <Linkedin className="w-4 h-4 mr-2" />
                      LinkedIn Profile
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full justify-start border-green-400 text-green-400 hover:bg-green-400 hover:text-black"
                    >
                      <Mail className="w-4 h-4 mr-2" />
                      Send Email
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-green-900/30 bg-black/50">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center text-gray-400">
            <div className="text-green-500 mb-2">user@portfolio:~$</div>
            <p>© 2024 Brayden Parish. Built with passion for technology.</p>
            <p className="text-sm mt-2">{"> "} Ready to debug the future, one ticket at a time.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
