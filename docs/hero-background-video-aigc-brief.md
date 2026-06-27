# GlimoLab Homepage Hero Background Video AIGC Brief

## 目标

为 GlimoLab 官网首页 Hero 区域制作一条全屏背景视频，用于替换当前蓝色网络节点动画背景。视频需要体现：

- 专业摄影与视频制作能力
- AI 生成、自动化剪辑、数字影像技术感
- 亚洲市场语境，包含东南亚/亚洲创作者、城市、品牌内容场景
- 高端但不过度炫技，能承载首页大标题和 CTA 文案
- 可无缝循环，适合作为网页背景

## 成片规格

- 用途：官网首页 Hero 背景视频
- 推荐时长：24 秒，可循环
- 画幅：16:9 横版
- 输出：3840x2160 或 1920x1080，30fps
- 版本：主视频 + 暗色蒙版版 + Web 压缩版
- Web 压缩建议：MP4 H.264 / WebM VP9，静音，目标 5-12MB
- 构图安全区：中心 60% 需要保持低对比、少主体，避免遮挡标题
- 页面叠加建议：深蓝半透明遮罩 `rgba(5, 12, 30, 0.55)` + 轻微蓝色渐变

## 视觉主题

**核心概念：**  
`Cinematic AI Studio for Asian Brands`

**关键词：**  
cinematic production studio, AI-assisted video creation, Asian creative team, Southeast Asia market, camera craft, neural interface, product content pipeline, premium tech brand.

**色彩：**

- GlimoLab primary blue: `#0066FF`
- Cyan accent: `#00BCD4`
- Deep navy: `#0A0A1A`
- Soft white highlights: `#EAF4FF`
- Neutral skin tones and warm practical lights for human scenes

**灯光：**

- 暗调高端摄影棚
- 蓝色/青色边缘光
- 柔和主光，低反差肤色
- 屏幕反射光、LED 灯管、镜头高光

**镜头语言：**

- 慢速 dolly in / dolly out
- gimbal tracking
- macro close-up
- rack focus
- slow parallax
- 少量粒子、光线扫描、半透明 AI UI overlay

**整体质感：**

- Premium commercial film
- Clean digital cinema
- Shallow depth of field
- Subtle anamorphic flare
- No aggressive cyberpunk, no cluttered UI

## 参考图片清单

制作前建议准备这些参考图。可用真实图库、Midjourney、Firefly、DALL-E 或品牌内部素材生成。

1. **专业摄影棚参考**
   - 暗色摄影棚
   - cinema camera on tripod / gimbal
   - softbox, LED tube, monitor wall
   - 蓝色边缘光，干净高级

2. **AI 制作界面参考**
   - abstract neural network interface
   - video timeline with glowing nodes
   - AI prompt-to-video dashboard
   - translucent holographic UI, no readable text

3. **亚洲创作者团队参考**
   - Asian creative director reviewing footage
   - Southeast Asian production team in studio
   - young professional creators, natural expressions
   - Manila / Jakarta / Singapore creative industry feel

4. **电商内容制作参考**
   - product turntable shoot
   - skincare / baby product / consumer product hero shot
   - clean tabletop, camera monitor, lighting setup

5. **亚洲市场城市参考**
   - Manila skyline at dusk
   - Jakarta business district
   - Singapore neon city reflections
   - Bangkok / Kuala Lumpur urban night lights

6. **品牌素材**
   - `public/glimo-lab-logo-horizontal.png`
   - `public/glimo-lab-logo-stacked.png`
   - 仅用于最后品牌校准，不建议直接出现在背景视频中，避免和网页 Header Logo 重复。

## 总体生成策略

不要一次生成 24 秒完整视频。建议生成 6 个 4 秒镜头，再在剪辑软件里拼接、统一调色、加暗色遮罩。

每个镜头都应遵守：

- 不出现可读文字
- 不出现随机 Logo
- 不出现夸张科幻机器人
- 不出现欧美单一市场感
- 不让主体长时间停留在画面中心
- 画面中心保留给网页标题
- 每个镜头都能单独循环，但组合起来有完整品牌叙事

## 分镜方案

### Shot 1 (0-4s) — Studio Hook

**目的：** 第一秒建立专业影像制作感。  
**构图：** Wide shot，暗色高端摄影棚，主体偏左/右，中心留空。  
**Camera move：** Slow dolly in。  
**Lighting：** 深蓝环境光，青色边缘光，柔和屏幕反射。  
**Subject：** 专业 cinema camera、灯光设备、监视器。  
**Action：** 摄影机和灯光缓慢亮起，监视器显示模糊画面波形。

**Prompt to copy:**

> A premium cinematic video production studio in Asia, dark navy environment, professional cinema camera on a tripod, LED tube lights, softbox, production monitors glowing with abstract non-readable video waveforms, subtle cyan and blue rim lighting, center area clean and low contrast for website text overlay, slow dolly in, shallow depth of field, clean digital cinema look, 4 seconds, 16:9, cinematic 1080p, synchronized audio

**Negative prompt:**

> readable text, random logos, cluttered equipment, harsh cyberpunk, cartoon, low quality, overexposed white background, centered face, busy center composition

**Audio direction:**  
如果工具生成音频，使用低频电子氛围 + 轻微摄影棚设备声。网页版本最终静音。

### Shot 2 (4-8s) — AI Creation Layer

**目的：** 体现 AI 视频生成和技术能力。  
**构图：** Macro / close-up，手指或触控笔操作透明界面，主体偏右。  
**Camera move：** Slow lateral slide + rack focus。  
**Lighting：** 屏幕蓝光、青色 UI 光晕。  
**Subject：** AI 视频生成界面、节点、时间线、素材缩略图，全部不可读。  
**Action：** 抽象节点连接，视频片段自动组合。

**Prompt to copy:**

> Close-up of an Asian creative professional interacting with a translucent AI video creation interface, glowing blue and cyan neural nodes, abstract timeline clips, prompt-to-video workflow visuals with no readable text, hand and stylus in foreground, professional studio monitor reflections, shallow depth of field, rack focus from hand to holographic interface, premium clean digital cinema style, 4 seconds, 16:9, cinematic 1080p, synchronized audio

**Negative prompt:**

> readable UI text, fake brand logos, sci-fi robot, messy desktop, distorted hands, extra fingers, excessive neon, cheap stock footage look

**Audio direction:**  
细微 UI 点击声、柔和电子脉冲，可后期删除。

### Shot 3 (8-12s) — Asian Market Production

**目的：** 明确亚洲市场语境和真实团队感。  
**构图：** Medium wide shot，亚洲创意团队在监视器前看画面，人物偏两侧。  
**Camera move：** Smooth gimbal tracking。  
**Lighting：** 暖色肤色主光 + 蓝色背景光。  
**Subject：** 2-3 位亚洲创作者，视频监视器、灯架、笔记本。  
**Action：** 团队审片、讨论、点头确认。

**Prompt to copy:**

> A small Southeast Asian creative production team reviewing AI-assisted video footage in a premium studio, Manila Jakarta Singapore market atmosphere, diverse Asian professionals, cinematic monitor glow, camera rigs and lighting stands in the background, warm soft key light on faces with blue cyan rim light, subjects positioned on the sides leaving the center clean for website copy, smooth gimbal tracking, 4 seconds, 16:9, cinematic 1080p, synchronized audio

**Negative prompt:**

> corporate boardroom, Western-only cast, readable text on screens, exaggerated smiles, busy center, random logos, overlit office, documentary news style

**Audio direction:**  
低声讨论氛围、轻微键盘/鼠标声。网页最终静音。

### Shot 4 (12-16s) — Product Content Craft

**目的：** 连接实际商业价值：电商内容、产品视频、品牌素材。  
**构图：** Macro product table / turntable shot，产品偏左下或右下。  
**Camera move：** Slow orbit / slider move。  
**Lighting：** 高级商业摄影布光，蓝色边缘光。  
**Subject：** 泛消费品，不出现具体可识别品牌；可用护肤瓶、智能设备、母婴用品等。  
**Action：** 产品在转台上旋转，AI overlay 自动标注镜头轨迹和光线，但无文字。

**Prompt to copy:**

> Premium e-commerce product video shoot in a dark cinematic studio, unbranded consumer product on a rotating turntable, professional macro lens, softbox reflections, blue and cyan rim lighting, subtle abstract AI tracking lines and camera path overlay with no text, shallow depth of field, slow orbit camera movement, clean center composition for website hero overlay, polished commercial film look, 4 seconds, 16:9, cinematic 1080p, synchronized audio

**Negative prompt:**

> visible brand names, readable labels, cluttered props, cheap tabletop lighting, cartoon CGI, floating text, overdone holograms, product centered too large

**Audio direction:**  
轻微机械转台声 + 低频音乐节拍。

### Shot 5 (16-20s) — Regional Scale

**目的：** 体现面向亚洲多市场、多语言、多平台扩展。  
**构图：** Wide city composite，亚洲城市夜景与抽象数据流。  
**Camera move：** Slow aerial push / parallax。  
**Lighting：** 城市暖光 + 品牌蓝数据线。  
**Subject：** 亚洲城市天际线、屏幕上方抽象视频画幅网格。  
**Action：** 多个竖屏/横屏视频窗口在城市上方抽象连接，无文字。

**Prompt to copy:**

> Cinematic dusk-to-night Asian city skyline inspired by Manila, Jakarta, and Singapore, premium commercial technology atmosphere, abstract blue and cyan video content streams connecting multiple markets, floating vertical and horizontal video frames with no readable text, subtle parallax aerial push, deep navy shadows, soft city lights, clean central negative space for website title overlay, elegant AI network visual language, 4 seconds, 16:9, cinematic 1080p, synchronized audio

**Negative prompt:**

> specific city landmarks too literal, readable billboards, random logos, overcrowded skyline, cyberpunk chaos, heavy rain, dystopian mood, centered busy objects

**Audio direction:**  
宽阔环境低频 + 城市远景氛围。

### Shot 6 (20-24s) — Loopable Brand Resolve

**目的：** 回到抽象品牌科技背景，方便无缝循环到 Shot 1。  
**构图：** Abstract studio-dark background，镜头穿过蓝色节点网络，中心干净。  
**Camera move：** Slow dolly out，和 Shot 1 的 dolly in 能衔接。  
**Lighting：** 深蓝、青色节点光、柔和镜头光斑。  
**Subject：** 抽象镜头光圈、视频帧、AI 节点。  
**Action：** 节点收束成柔和光场，不形成文字或 Logo。

**Prompt to copy:**

> Abstract cinematic AI video production environment, deep navy studio darkness, soft blue and cyan neural network nodes, subtle camera aperture shapes, floating translucent video frames with no text, premium brand film atmosphere, center area intentionally clean for website hero copy, slow dolly out with gentle parallax, shallow depth of field, elegant loopable ending that transitions back to a real production studio, 4 seconds, 16:9, cinematic 1080p, synchronized audio

**Negative prompt:**

> readable text, logo reveal, hard cuts, chaotic particles, cartoon, sci-fi spaceship, excessive lens flare, bright white center, busy composition

**Audio direction:**  
音乐尾音保持持续，不做强结尾，方便循环。

## 通用主提示词块

每个镜头提示词前可统一加入：

> Premium cinematic brand film for an AI video production studio serving Asian brands, dark navy and GlimoLab blue color palette, professional camera craft, subtle AI interface overlays, Southeast Asian market atmosphere, clean center negative space for website hero text, elegant commercial lighting, shallow depth of field, smooth camera movement.

## 通用负面提示词

> readable text, captions, random logos, watermark, messy UI, overcomplicated holograms, cartoon, anime, robot, sci-fi spaceship, dystopian cyberpunk, low quality, flickering faces, distorted hands, extra fingers, overexposed white center, busy center composition, stock footage look, Western-only cast, aggressive glitch effects

## 后期制作建议

1. **剪辑顺序**
   - Shot 1 → Shot 2 → Shot 3 → Shot 4 → Shot 5 → Shot 6
   - 每段 4 秒，转场使用 8-12 帧的 dissolve 或 match cut。

2. **循环处理**
   - Shot 6 末尾做深蓝抽象节点背景。
   - Shot 1 开头也是暗色摄影棚环境。
   - 用 8 帧 cross dissolve 做 loop transition。

3. **调色**
   - 整体压低曝光 0.3-0.7 stop。
   - 保留肤色自然，不要全画面变蓝。
   - 阴影偏 navy，highlight 保持 soft white。
   - 蓝色和青色只作为边缘光与科技元素。

4. **网页遮罩**
   - 视频上方叠加深色遮罩，保证当前 Hero 文案可读。
   - 推荐 CSS：

```css
.hero-video-overlay {
  background:
    radial-gradient(circle at 50% 35%, rgba(0, 102, 255, 0.22), transparent 48%),
    linear-gradient(180deg, rgba(10, 10, 26, 0.58), rgba(10, 10, 26, 0.78));
}
```

5. **导出版本**
   - Master: ProRes / high bitrate MP4, 3840x2160
   - Web MP4: H.264, 1920x1080, 30fps, 8-12 Mbps
   - WebM: VP9, 1920x1080, 30fps, 5-8 Mbps
   - Poster image: 从 Shot 1 或 Shot 6 抽一帧，压暗后作为 `poster`

6. **网页性能**
   - 默认静音 autoplay loop playsinline。
   - 移动端可以使用 poster image 或 720p 轻量版。
   - 文件过大时优先保留 Shot 1、2、5、6，剪成 16 秒循环版。

## 推荐参考图生成提示词

### Reference Image A — Premium Studio

> Premium dark cinematic video production studio in Asia, cinema camera, LED tube lights, production monitors, blue and cyan rim lighting, soft haze, clean negative space, commercial film photography, no text, no logos, 16:9

### Reference Image B — AI Interface

> Close-up of an Asian video editor using a translucent AI video creation interface, glowing neural nodes, abstract timeline, cyan blue interface light, shallow depth of field, no readable text, premium tech studio, 16:9

### Reference Image C — Asian Creative Team

> Southeast Asian creative production team reviewing footage in a dark premium studio, warm soft key light, blue rim light, professional camera equipment, cinematic composition, no text, no logos, 16:9

### Reference Image D — Product Shoot

> Premium e-commerce product video shoot, unbranded product on rotating turntable, macro lens, softbox reflections, blue cyan rim light, dark studio background, clean commercial style, no text, 16:9

### Reference Image E — Asian Market Scale

> Cinematic Asian city skyline at dusk, inspired by Manila Jakarta Singapore, elegant blue digital content streams, premium technology brand mood, clean central negative space, no readable billboards, 16:9

## 建议交付给 AIGC 制作工具的顺序

1. 先生成 5 张参考图，统一风格。
2. 选择最接近 GlimoLab 气质的一张作为全片 style reference。
3. 按 6 个 shot 分别生成 4 秒视频。
4. 将所有 clip 导入 DaVinci Resolve / Premiere / CapCut。
5. 统一调色，加入暗色网页遮罩测试。
6. 导出 24 秒无声循环版。
7. 放到网页 Hero 背景测试文案可读性。

## 为什么这套方案适合首页

- **第一秒强钩子：** 摄影棚和专业设备直接建立“我们会做专业视频”的信任。
- **AI 不喧宾夺主：** AI 元素作为辅助图层出现，不把品牌做成廉价科幻风。
- **亚洲市场明确：** 团队、城市、内容生产场景都指向东南亚/亚洲品牌客户。
- **适合文字叠加：** 所有镜头都要求中心留白，网页标题不会被主体抢视觉。
- **可循环：** 最后一镜回到抽象深蓝节点，能自然接回第一镜的暗色摄影棚。
- **商业转化清晰：** 从专业制作 → AI 工作流 → 亚洲团队 → 电商内容 → 区域扩展，和 GlimoLab 当前服务定位一致。

