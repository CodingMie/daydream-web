import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function PrivacyPage() {
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
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">隐私政策</h1>
                <p className="text-muted-foreground">最后更新：2025年3月12日</p>
              </div>
              <div className="space-y-6">
                <div className="space-y-2">
                  <h2 className="text-2xl font-bold">引言</h2>
                  <p>
                    本隐私政策描述了应用名称（"我们"、"我们的"或"我们"）在您使用我们的移动应用程序和相关服务（统称为"服务"）时如何收集、使用和共享您的个人信息。
                  </p>
                  <p>
                    通过使用我们的服务，您同意按照本政策收集和使用信息。除本隐私政策所述外，我们不会与任何人使用或共享您的信息。
                  </p>
                </div>
                <div className="space-y-2">
                  <h2 className="text-2xl font-bold">信息收集与使用</h2>
                  <p>我们收集几种不同类型的信息，用于各种目的，以便为您提供和改进我们的服务。</p>
                  <h3 className="text-xl font-bold mt-4">收集的数据类型</h3>
                  <h4 className="text-lg font-bold mt-3">个人数据</h4>
                  <p>
                    在使用我们的服务时，我们可能会要求您向我们提供某些可用于联系或识别您的个人身份信息（"个人数据"）。个人身份信息可能包括但不限于：
                  </p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>电子邮件地址</li>
                    <li>名字和姓氏</li>
                    <li>电话号码</li>
                    <li>地址、州、省、邮政编码、城市</li>
                    <li>Cookie和使用数据</li>
                  </ul>
                  <h4 className="text-lg font-bold mt-3">使用数据</h4>
                  <p>
                    每当您访问我们的服务或通过移动设备访问服务时，我们也可能收集您的浏览器发送的信息（"使用数据"）。
                  </p>
                  <p>
                    此使用数据可能包括您计算机的互联网协议地址（例如IP地址）、浏览器类型、浏览器版本、您访问的我们服务的页面、您访问的时间和日期、在这些页面上花费的时间、唯一设备标识符和其他诊断数据。
                  </p>
                  <p>
                    当您使用移动设备访问服务时，此使用数据可能包括您使用的移动设备类型、您的移动设备唯一ID、您的移动设备的IP地址、您的移动操作系统、您使用的移动互联网浏览器类型、唯一设备标识符和其他诊断数据。
                  </p>
                </div>
                <div className="space-y-2">
                  <h2 className="text-2xl font-bold">数据使用</h2>
                  <p>应用名称将收集的数据用于各种目的：</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>提供和维护我们的服务</li>
                    <li>通知您有关我们服务的变更</li>
                    <li>允许您在选择时参与我们服务的互动功能</li>
                    <li>提供客户支持</li>
                    <li>收集分析或有价值的信息，以便我们改进我们的服务</li>
                    <li>监控我们服务的使用情况</li>
                    <li>检测、预防和解决技术问题</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h2 className="text-2xl font-bold">数据安全</h2>
                  <p>
                    您的数据安全对我们很重要，但请记住，通过互联网传输或电子存储的方法没有100%安全。虽然我们努力使用商业上可接受的方式保护您的个人数据，但我们不能保证其绝对安全。
                  </p>
                </div>
                <div className="space-y-2">
                  <h2 className="text-2xl font-bold">本隐私政策的变更</h2>
                  <p>我们可能会不时更新我们的隐私政策。我们将通过在此页面上发布新的隐私政策来通知您任何更改。</p>
                  <p>
                    在更改生效之前，我们将通过电子邮件和/或我们服务上的显著通知让您知道，并更新本隐私政策顶部的"生效日期"。
                  </p>
                  <p>建议您定期查看本隐私政策以了解任何更改。本隐私政策的更改在发布到此页面时生效。</p>
                </div>
                <div className="space-y-2">
                  <h2 className="text-2xl font-bold">联系我们</h2>
                  <p>如果您对本隐私政策有任何疑问，请联系我们：</p>
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

