import Link from "next/link"
import Image from "next/image"
import { Shield, Sparkles, Shuffle, Users } from "lucide-react"
import HeroImage from '@/public/daydream.png'


export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-16 flex items-center justify-between border-b">
        <Link href="/" className="flex items-center gap-2 font-bold text-xl">
          <Shield className="h-6 w-6" />
          <span>梦游共和</span>
        </Link>
        <nav className="flex gap-4 sm:gap-6">
          <Link href="/" className="text-sm font-medium hover:underline underline-offset-4">
            首页
          </Link>
          <Link href="/support" className="text-sm font-medium hover:underline underline-offset-4">
            技术支持
          </Link>
          <Link href="/privacy" className="text-sm font-medium hover:underline underline-offset-4">
            隐私政策
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 flex items-center justify-center">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">弹性自律，随机探索</h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    梦游共和，一款为厌恶机械重复的你设计的习惯养成工具。通过盲盒式随机任务，让自律变得有趣而轻松。
                  </p>
                </div>
                {/* <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button className="inline-flex h-10 items-center justify-center gap-2">
                    <Download className="h-4 w-4" />
                    立即下载
                  </Button>
                  <Link href="/support">
                    <Button variant="outline" className="inline-flex h-10 items-center justify-center gap-2">
                      <MessageCircle className="h-4 w-4" />
                      了解更多
                    </Button>
                  </Link>
                </div> */}
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src={HeroImage}
                  width={300}
                  height={550}
                  alt="梦游共和应用截图"
                  className="rounded-2xl object-cover border shadow-md"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted flex items-center justify-center">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">核心功能</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl">告别传统习惯养成的枯燥，拥抱充满惊喜的自律新方式</p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
              <div className="grid gap-2 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary mx-auto">
                  <Shuffle className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold">随机任务</h3>
                <p className="text-muted-foreground">每日5次随机官方任务，减轻决策疲劳，激发行动力</p>
              </div>
              <div className="grid gap-2 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary mx-auto">
                  <Sparkles className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold">个性化任务池</h3>
                <p className="text-muted-foreground">创建专属任务，让系统随机分配，减轻自责压力</p>
              </div>
              <div className="grid gap-2 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary mx-auto">
                  <Users className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold">周历成就</h3>
                <p className="text-muted-foreground">可视化展示每周完成任务，记录成长轨迹，提供持续成就感</p>
              </div>
            </div>
            {/* <div className="flex justify-center">
              <Link href="/features">
                <Button variant="outline" className="inline-flex h-10 items-center justify-center gap-2">
                  探索更多功能
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div> */}
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">© 2025 梦游共和。保留所有权利。</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link href="/terms" className="text-xs hover:underline underline-offset-4">
            服务条款
          </Link>
          <Link href="/privacy" className="text-xs hover:underline underline-offset-4">
            隐私政策
          </Link>
        </nav>
      </footer>
    </div>
  )
}

