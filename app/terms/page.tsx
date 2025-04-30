import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function TermsPage() {
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
            <div className="mx-auto max-w-3xl space-y-8">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">服务条款</h1>
                <p className="text-muted-foreground">最后更新：2025年3月12日</p>
              </div>
              <div className="space-y-6">
                <div className="space-y-2">
                  <h2 className="text-2xl font-bold">接受条款</h2>
                  <p>
                    通过访问或使用移动应用程序（以下简称"应用"），您同意受这些服务条款（"条款"）的约束。如果您不同意这些条款的任何部分，则不得使用我们的应用。
                  </p>
                </div>
                <div className="space-y-2">
                  <h2 className="text-2xl font-bold">使用许可</h2>
                  <p>
                    我们授予您下载和使用应用的个人、非独占、不可转让、有限许可，仅用于您个人、非商业目的。此许可禁止您：
                  </p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>修改、反编译或尝试提取应用的源代码</li>
                    <li>移除任何版权或其他专有声明</li>
                    <li>将应用转让给任何第三方</li>
                    <li>使用应用进行任何非法或未经授权的目的</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h2 className="text-2xl font-bold">用户账户</h2>
                  <p>
                    某些功能可能需要您注册账户。您负责维护您账户的保密性，并对您账户下发生的所有活动负责。您同意：
                  </p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>提供准确、完整的注册信息</li>
                    <li>立即更新任何变更的信息</li>
                    <li>保护您的账户安全并防止未经授权的访问</li>
                    <li>如发现任何未经授权使用您账户的情况，立即通知我们</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h2 className="text-2xl font-bold">用户内容</h2>
                  <p>
                    我们的应用可能允许您创建、上传或分享内容（"用户内容"）。您保留对您用户内容的所有权利，但授予我们非独占、免版税、全球性许可，允许我们使用、复制、修改、发布和展示此类用户内容，以便提供和改进我们的服务。
                  </p>
                  <p>
                    您声明并保证您拥有或已获得必要权利、许可和权限，可以使用和授权我们使用所有专利、商标、商业秘密、版权或其他专有权利，以便按照这些条款提供用户内容。
                  </p>
                </div>
                <div className="space-y-2">
                  <h2 className="text-2xl font-bold">禁止行为</h2>
                  <p>使用我们的应用时，您同意不会：</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>违反任何适用法律或法规</li>
                    <li>侵犯他人的知识产权或其他权利</li>
                    <li>上传包含病毒或恶意代码的内容</li>
                    <li>干扰或破坏应用的安全功能</li>
                    <li>收集或存储其他用户的个人数据</li>
                    <li>使用自动化方式访问应用，如机器人或爬虫</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h2 className="text-2xl font-bold">知识产权</h2>
                  <p>
                    应用及其原始内容、功能和设计受国际版权、商标、专利、商业秘密和其他知识产权或专有权利法律的保护。这些权利归我们或我们的许可方所有。
                  </p>
                </div>
                <div className="space-y-2">
                  <h2 className="text-2xl font-bold">免责声明</h2>
                  <p>
                    应用按"原样"和"可用"基础提供，不提供任何明示或暗示的保证。我们不保证应用将满足您的要求，或不间断、及时、安全或无错误地运行。
                  </p>
                </div>
                <div className="space-y-2">
                  <h2 className="text-2xl font-bold">责任限制</h2>
                  <p>
                    在法律允许的最大范围内，我们对任何直接、间接、附带、特殊、后果性或惩罚性损害不承担责任，包括但不限于利润损失、商誉、使用、数据或其他无形损失。
                  </p>
                </div>
                <div className="space-y-2">
                  <h2 className="text-2xl font-bold">条款修改</h2>
                  <p>
                    我们保留随时修改或替换这些条款的权利。如有重大变更，我们将尽力提前通知。您继续使用应用将视为接受修改后的条款。
                  </p>
                </div>
                <div className="space-y-2">
                  <h2 className="text-2xl font-bold">适用法律</h2>
                  <p>
                    这些条款受中华人民共和国法律管辖，不考虑法律冲突原则。
                  </p>
                </div>
                <div className="space-y-2">
                  <h2 className="text-2xl font-bold">联系我们</h2>
                  <p>如果您对这些服务条款有任何疑问，请联系我们：</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>通过电子邮件：544286175@qq.com</li>
                    <li>通过微信：yangyi-1997</li>
                  </ul>
                </div>
              </div>
            </div>
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