import type { LucideIcon } from 'lucide-react';
import { Github, MessageCircle, Music2, Send } from 'lucide-react';

export type SocialLinkId = 'feishu' | 'wechat' | 'github' | 'douyin';

/** 将 href 改为你的真实地址；留空则首页按钮呈半透明且点击不跳转 */
export const socialLinks: Record<SocialLinkId, { href: string; label: string; Icon: LucideIcon }> = {
  feishu: { href: '', label: '飞书知识库', Icon: Send },
  wechat: { href: '', label: '微信联系', Icon: MessageCircle },
  github: { href: '', label: 'GitHub', Icon: Github },
  douyin: { href: '', label: '抖音', Icon: Music2 },
};

/** Hero 药丸按钮顺序 */
export const heroSocialLinkOrder: SocialLinkId[] = ['feishu', 'wechat', 'github', 'douyin'];

/** 页脚图标顺序：飞书、抖音、GitHub、微信 */
export const footerSocialLinkOrder: SocialLinkId[] = ['feishu', 'douyin', 'github', 'wechat'];
