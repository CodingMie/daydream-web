import Link from "next/link"
import { ArrowLeft, Mail, MessageCircle, Phone } from "lucide-react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function SupportPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-16 flex items-center border-b">
        <Link href="/" className="flex items-center gap-2 font-bold text-xl">
          <ArrowLeft className="h-4 w-4" />
          <span>返回首页</span>
        </Link>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 flex items-center justify-center">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">技术支持</h1>
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  我们随时为您解答关于我们应用的任何问题或疑虑。
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-8 py-12 lg:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>联系我们</CardTitle>
                  <CardDescription>直接联系我们的支持团队</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-muted-foreground" />
                    <p>544286175@qq.com</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-muted-foreground" />
                    <p>yangyi-1997</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <MessageCircle className="h-5 w-5 text-muted-foreground" />
                    <p>在线客服时间：北京时间上午11点至下午5点</p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>常见问题</CardTitle>
                  <CardDescription>常见问题的快速解答</CardDescription>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="w-full">
      
                    <AccordionItem value="item-1">
                      <AccordionTrigger>我的数据安全吗？</AccordionTrigger>
                      <AccordionContent>
                        是的，我们使用行业标准的加密和安全措施来保护您的数据。您可以在我们的隐私政策中了解更多信息。
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                      <AccordionTrigger>如何更新应用？</AccordionTrigger>
                      <AccordionContent>
                        应用应该通过您设备的应用商店自动更新。如果您遇到问题，请尝试在应用商店中手动检查更新。
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                      <AccordionTrigger>我可以离线使用应用吗？</AccordionTrigger>
                      <AccordionContent>
                        应用的某些功能可以离线使用，但完整功能需要互联网连接。
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>
            </div>
            <div className="mx-auto max-w-5xl">
              <Card>
                <CardHeader>
                  <CardTitle>故障排除指南</CardTitle>
                  <CardDescription>常见问题及其解决方案</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <h3 className="text-lg font-medium">应用启动时崩溃</h3>
                    <p className="text-muted-foreground">
                      1. 确保您的设备满足最低要求。
                      <br />
                      2. 尝试重启您的设备。
                      <br />
                      3. 卸载并重新安装应用。
                      <br />
                      4. 检查设备系统更新。
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-medium">同步问题</h3>
                    <p className="text-muted-foreground">
                      1. 确认您有稳定的互联网连接。
                      <br />
                      2. 检查您是否使用正确的账户登录。
                      <br />
                      3. 强制关闭应用并重新打开。
                      <br />
                      4. 在设备设置中清除应用缓存。
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-medium">电池消耗</h3>
                    <p className="text-muted-foreground">
                      1. 更新到最新版本的应用。
                      <br />
                      2. 禁用应用的后台刷新。
                      <br />
                      3. 检查后台运行的其他应用。
                      <br />
                      4. 调整通知设置以减少活动。
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">© 2025 应用名称。保留所有权利。</p>
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

