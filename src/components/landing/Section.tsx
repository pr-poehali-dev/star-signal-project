import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Icon from "@/components/ui/icon"
import type { SectionProps } from "@/types"

const REVIEWS = [
  { name: "Дмитрий К.", geo: "Россия", text: "Работаю с LuckyBear уже 8 месяцев — RevShare 60% держится стабильно. Выплаты всегда в понедельник, без задержек. Лучшая партнёрка из тех, с кем работал.", stars: 5 },
  { name: "Артём М.", geo: "Украина", text: "Перешёл с другой партнёрки — разница ощутимая. Здесь реально платят и конвертят хорошо. Менеджер @ecalp всегда на связи, помогает с креативами.", stars: 5 },
  { name: "Никита Р.", geo: "Казахстан", text: "CPA модель 80$ за FTD — это честно для СНГ трафика. Получил первую выплату через неделю после старта. Рекомендую всем арбитражникам.", stars: 5 },
  { name: "Сергей В.", geo: "Беларусь", text: "Суб-партнёрство работает как часы — 8% с объёмов команды каждую неделю. Пассивный доход растёт с каждым месяцем.", stars: 5 },
  { name: "Алина Т.", geo: "Молдова", text: "Привожу крипто-трафик с бурж — конверт топовый, особенно на слоты. Платформа стабильная, игроки задерживаются.", stars: 5 },
  { name: "Максим Д.", geo: "Россия", text: "Гибридная модель идеально под мой трафик. 40$ CPA + 30% RevShare — доход удвоился за 2 месяца. Топ!", stars: 5 },
  { name: "Иван Л.", geo: "Грузия", text: "Работаю через Telegram-бот — удобно, быстро. Статистика обновляется в реальном времени. Прозрачность на высшем уровне.", stars: 5 },
  { name: "Олег Б.", geo: "Азербайджан", text: "Первые депозиты конвертят особенно хорошо благодаря акции. Успел получить бонус за первые 50 FTD. Крутая программа для новичков.", stars: 5 },
  { name: "Виталий С.", geo: "Узбекистан", text: "Гемблинг трафик с TikTok идёт отлично на LuckyBear. Дизайн казино цепляет игроков. RevShare 58% — держат слово.", stars: 5 },
  { name: "Евгений П.", geo: "Россия", text: "3 года в арбитраже, работал с топ-10 партнёрками. LuckyBear в пятёрке лучших по честности и выплатам. Рекомендую без оговорок.", stars: 5 },
  { name: "Кирилл Н.", geo: "Литва", text: "Крипто ГЕО работает мощно — игроки активные, средний депозит высокий. RevShare 62% считается автоматически.", stars: 5 },
  { name: "Андрей Ф.", geo: "Латвия", text: "Команда очень профессиональная. @oyesxa помог настроить трекинг за 20 минут. Всё работает без технических косяков.", stars: 5 },
  { name: "Тимур Х.", geo: "Казахстан", text: "Привожу стримеров — конверт с live-казино топовый. Специальные условия для стримов обсудили индивидуально. Гибкий подход.", stars: 5 },
  { name: "Роман З.", geo: "Россия", text: "Суб-партнёрство — это отдельная тема. Привёл 5 арбитражников в команду, теперь имею 10% с их оборота. Пассив без усилий.", stars: 5 },
  { name: "Вадим О.", geo: "Украина", text: "LuckyBear держит RevShare даже в low-сезон. Другие партнёрки режут ставки — эти нет. Ценят долгосрочных партнёров.", stars: 5 },
  { name: "Павел Г.", geo: "Польша", text: "Бурж крипто-трафик заходит на ура. Интерфейс казино на нескольких языках — это важно для конверта. Оценка 10/10.", stars: 5 },
  { name: "Михаил Е.", geo: "Россия", text: "Работаю с января 2024 — ни одной задержки выплат. Каждый понедельник как часы. Вот что значит надёжный партнёр.", stars: 5 },
  { name: "Станислав В.", geo: "Беларусь", text: "Решился попробовать CPA 100$ — конверт оправдал. За месяц 120 FTD с Инстаграм. Отличная партнёрка для таргетологов.", stars: 5 },
  { name: "Леонид Ш.", geo: "Армения", text: "Трафик с SEO — долгая игра, но RevShare делает своё. Накопленная база игроков приносит пассив каждый месяц.", stars: 5 },
  { name: "Александр Ю.", geo: "Россия", text: "Лучшая партнёрка для работы в СНГ. Высокий RevShare, быстрые выплаты, живой саппорт. Буду работать ещё долго.", stars: 5 },
]

const MODELS = [
  {
    title: "RevShare",
    range: "50–65%",
    desc: "Процент от чистого дохода казино (NGR) с твоих игроков — навсегда",
    icon: "TrendingUp",
    color: "#FFD700",
    geo: "СНГ / БУРЖ / CRYPTO",
  },
  {
    title: "CPA",
    range: "$20–100",
    desc: "Фиксированная выплата за каждого первого депозитчика (FTD)",
    icon: "DollarSign",
    color: "#4ADE80",
    geo: "СНГ / БУРЖ / CRYPTO",
  },
  {
    title: "Hybrid",
    range: "CPA + %",
    desc: "Комбо: фикс за FTD плюс доля от дохода игрока",
    icon: "Layers",
    color: "#818CF8",
    geo: "СНГ / БУРЖ / CRYPTO",
  },
]

const SEO_KEYWORDS = [
  "Лучшие партнёрки СНГ 2024",
  "Арбитраж трафика казино",
  "RevShare гемблинг партнёрка",
  "CPA казино партнёрская программа",
  "Топ партнёрки гемблинг бурж",
  "Крипто казино партнёрка",
  "Стримы гемблинг партнёрство",
  "Выплаты без вейджера партнёрка",
]

function StarRating({ stars }: { stars: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: stars }).map((_, i) => (
        <span key={i} className="text-[#FFD700] text-sm">★</span>
      ))}
    </div>
  )
}

export default function Section({ id, title, subtitle, content, isActive, showButton, buttonText, buttonUrl, variant }: SectionProps) {
  const handleButtonClick = () => {
    if (buttonUrl) window.open(buttonUrl, '_blank')
  }

  if (variant === 'hero') {
    return (
      <section id={id} className="relative h-screen w-full snap-start flex flex-col justify-center p-8 md:p-16 lg:p-24 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: 'url(https://cdn.poehali.dev/projects/5d972cd9-de95-4814-b26f-7a1593951e0d/files/6ee74ecc-779f-46a6-b125-51a915f19892.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.18,
          }}
        />
        {subtitle && (
          <motion.div className="mb-6" initial={{ opacity: 0, y: 20 }} animate={isActive ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }}>
            {subtitle}
          </motion.div>
        )}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-5 mb-4"
        >
          <img
            src="https://cdn.poehali.dev/projects/5d972cd9-de95-4814-b26f-7a1593951e0d/bucket/e8422093-8dba-4743-a5df-ae7d06ca3950.png"
            alt="LuckyBear"
            className="w-20 h-20 md:w-24 md:h-24 object-contain drop-shadow-[0_0_16px_rgba(100,160,255,0.6)]"
          />
          <div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-none tracking-tight text-white">
              LUCKY<span className="text-[#FFD700]">BEAR</span>
            </h1>
            <div className="text-xl md:text-2xl lg:text-3xl font-bold text-[#FFD700] tracking-widest mt-1">
              PARTNERS
            </div>
          </div>
        </motion.div>
        <motion.p
          className="text-lg md:text-xl max-w-xl mt-4 text-neutral-300 leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {content}
        </motion.p>
        {showButton && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isActive ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.45 }}
            className="mt-10 flex gap-4 flex-wrap"
          >
            <Button
              size="lg"
              onClick={handleButtonClick}
              className="bg-[#FFD700] text-black font-bold hover:bg-[#FFC200] transition-colors text-base px-8 py-4"
            >
              {buttonText}
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => window.open('https://t.me/ecalp', '_blank')}
              className="text-white border-white/30 bg-transparent hover:bg-white/10 text-base px-8 py-4"
            >
              Связаться с менеджером
            </Button>
          </motion.div>
        )}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isActive ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="mt-12 flex gap-8 flex-wrap"
        >
          {[
            { label: "RevShare", value: "до 65%" },
            { label: "CPA", value: "до $100" },
            { label: "Выплаты", value: "Каждый Пн" },
          ].map(stat => (
            <div key={stat.label}>
              <div className="text-2xl font-black text-[#FFD700]">{stat.value}</div>
              <div className="text-sm text-neutral-500 uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </section>
    )
  }

  if (variant === 'models') {
    return (
      <section id={id} className="relative h-screen w-full snap-start flex flex-col justify-center p-8 md:p-16 lg:p-24">
        <motion.h2
          className="text-4xl md:text-5xl font-black text-white mb-3 leading-tight"
          initial={{ opacity: 0, y: 50 }}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          {title}
        </motion.h2>
        <motion.p
          className="text-neutral-400 text-lg mb-10"
          initial={{ opacity: 0 }}
          animate={isActive ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          {content}
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl">
          {MODELS.map((model, i) => (
            <motion.div
              key={model.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isActive ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.12 }}
              className="border border-white/10 bg-white/5 backdrop-blur-sm rounded-2xl p-6 hover:border-[#FFD700]/40 transition-colors"
            >
              <Icon name={model.icon as "TrendingUp"} size={28} style={{ color: model.color }} className="mb-4" />
              <div className="text-3xl font-black mb-1" style={{ color: model.color }}>{model.range}</div>
              <div className="text-white font-bold text-xl mb-2">{model.title}</div>
              <div className="text-neutral-400 text-sm mb-4 leading-relaxed">{model.desc}</div>
              <div className="inline-flex items-center gap-1.5 bg-white/5 rounded-full px-3 py-1 text-xs text-neutral-400">
                <Icon name="Globe" size={12} />
                {model.geo}
              </div>
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-8"
        >
          <Button
            size="lg"
            onClick={() => window.open('https://t.me/Luckybear_partners_bot', '_blank')}
            className="bg-[#FFD700] text-black font-bold hover:bg-[#FFC200] transition-colors"
          >
            Выбрать модель
          </Button>
        </motion.div>
      </section>
    )
  }

  if (variant === 'sub') {
    return (
      <section id={id} className="relative h-screen w-full snap-start flex flex-col justify-center p-8 md:p-16 lg:p-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-2 bg-[#FFD700]/10 border border-[#FFD700]/30 rounded-full px-4 py-2 text-[#FFD700] text-sm font-medium mb-6 w-fit"
        >
          <Icon name="Users" size={16} />
          Пассивный доход
        </motion.div>
        <motion.h2
          className="text-4xl md:text-6xl font-black text-white mb-4 leading-tight"
          initial={{ opacity: 0, y: 50 }}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          {title}
        </motion.h2>
        <motion.p
          className="text-neutral-300 text-xl max-w-xl mb-10 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={isActive ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {content}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="grid grid-cols-2 gap-4 max-w-lg"
        >
          {[
            { percent: "5%", label: "Базовый уровень", desc: "При небольших объёмах" },
            { percent: "10%", label: "Топ уровень", desc: "При высоких объёмах" },
          ].map((tier) => (
            <div key={tier.percent} className="border border-white/10 bg-white/5 rounded-2xl p-5">
              <div className="text-4xl font-black text-[#FFD700] mb-1">{tier.percent}</div>
              <div className="text-white font-semibold mb-1">{tier.label}</div>
              <div className="text-neutral-500 text-sm">{tier.desc}</div>
            </div>
          ))}
        </motion.div>
        <motion.p
          className="text-neutral-500 text-sm mt-6 max-w-md"
          initial={{ opacity: 0 }}
          animate={isActive ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          Процент зависит от объёмов привлечённых суб-агентов. Доход начисляется каждый понедельник вместе с основными выплатами.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-8"
        >
          <Button
            size="lg"
            onClick={() => window.open('https://t.me/ecalp', '_blank')}
            className="bg-[#FFD700] text-black font-bold hover:bg-[#FFC200]"
          >
            Узнать подробнее
          </Button>
        </motion.div>
      </section>
    )
  }

  if (variant === 'payments') {
    return (
      <section id={id} className="relative h-screen w-full snap-start flex flex-col justify-center p-8 md:p-16 lg:p-24">
        <motion.h2
          className="text-4xl md:text-6xl font-black text-white mb-4 leading-tight"
          initial={{ opacity: 0, y: 50 }}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          {title}
        </motion.h2>
        <motion.p
          className="text-neutral-300 text-xl max-w-xl mb-10 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={isActive ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {content}
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl">
          {[
            { icon: "Calendar", title: "Каждый понедельник", desc: "Стабильный день выплат без задержек и переносов", color: "#FFD700" },
            { icon: "Zap", title: "Без вейджера", desc: "Деньги на игровой баланс сразу — без условий отыгрыша", color: "#4ADE80" },
            { icon: "BarChart2", title: "Прозрачная статистика", desc: "Реальные данные по игрокам, NGR и начислениям в реальном времени", color: "#818CF8" },
            { icon: "Shield", title: "Гарантия выплат", desc: "Работаем честно с первого дня — более 500 активных партнёров", color: "#FB923C" },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: -20 }}
              animate={isActive ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.25 + i * 0.1 }}
              className="flex items-start gap-4 border border-white/10 bg-white/5 rounded-2xl p-5"
            >
              <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: item.color + '22' }}>
                <Icon name={item.icon as "Calendar"} size={20} style={{ color: item.color }} />
              </div>
              <div>
                <div className="text-white font-bold mb-1">{item.title}</div>
                <div className="text-neutral-400 text-sm leading-relaxed">{item.desc}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    )
  }

  if (variant === 'promo') {
    return (
      <section id={id} className="relative h-screen w-full snap-start flex flex-col justify-center p-8 md:p-16 lg:p-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/30 rounded-full px-4 py-2 text-orange-400 text-sm font-medium mb-6 w-fit"
        >
          <Icon name="Flame" size={16} />
          Горячее предложение
        </motion.div>
        <motion.h2
          className="text-4xl md:text-6xl font-black text-white mb-4 leading-tight"
          initial={{ opacity: 0, y: 50 }}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          {title}
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-2xl border border-[#FFD700]/30 bg-[#FFD700]/5 rounded-2xl p-6 mb-8"
        >
          <div className="text-[#FFD700] font-black text-2xl mb-2">Выплаты за первые депозиты</div>
          <div className="text-neutral-300 text-base leading-relaxed mb-4">
            Эксклюзивная акция для партнёров — повышенные ставки CPA за первые FTD от новых игроков. Ограниченное время!
          </div>
          <div className="flex gap-6">
            <div>
              <div className="text-2xl font-black text-white">+20%</div>
              <div className="text-neutral-500 text-sm">к базовой ставке CPA</div>
            </div>
            <div>
              <div className="text-2xl font-black text-white">48 ч</div>
              <div className="text-neutral-500 text-sm">холд на выплату</div>
            </div>
          </div>
        </motion.div>
        {showButton && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isActive ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Button
              size="lg"
              onClick={() => window.open(buttonUrl || '#', '_blank')}
              className="bg-[#FFD700] text-black font-bold hover:bg-[#FFC200]"
            >
              {buttonText}
            </Button>
          </motion.div>
        )}
      </section>
    )
  }

  if (variant === 'reviews') {
    return (
      <section id={id} className="relative h-screen w-full snap-start flex flex-col justify-center p-8 md:p-16 overflow-hidden">
        <motion.h2
          className="text-4xl md:text-5xl font-black text-white mb-8 leading-tight flex-shrink-0"
          initial={{ opacity: 0, y: 30 }}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          {title}
        </motion.h2>
        <motion.div
          initial={{ opacity: 0 }}
          animate={isActive ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex-1 overflow-y-auto scrollbar-hide"
          style={{ scrollbarWidth: 'none' }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 pb-4">
            {REVIEWS.map((review, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={isActive ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.1 + i * 0.04 }}
                className="border border-white/10 bg-white/5 rounded-xl p-4"
              >
                <StarRating stars={review.stars} />
                <p className="text-neutral-300 text-sm mt-2 leading-relaxed">{review.text}</p>
                <div className="mt-3 flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-[#FFD700]/20 flex items-center justify-center text-[#FFD700] text-xs font-bold">
                    {review.name[0]}
                  </div>
                  <div>
                    <div className="text-white text-xs font-semibold">{review.name}</div>
                    <div className="text-neutral-600 text-xs">{review.geo}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    )
  }

  if (variant === 'seo') {
    return (
      <section id={id} className="relative h-screen w-full snap-start flex flex-col justify-center p-8 md:p-16 lg:p-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/30 rounded-full px-4 py-2 text-purple-400 text-sm font-medium mb-6 w-fit"
        >
          <Icon name="Search" size={16} />
          Арбитраж трафика / Гемблинг
        </motion.div>
        <motion.h2
          className="text-4xl md:text-5xl font-black text-white mb-4 leading-tight"
          initial={{ opacity: 0, y: 50 }}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          {title}
        </motion.h2>
        <motion.p
          className="text-neutral-400 text-lg max-w-2xl mb-8 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={isActive ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          LuckyBear Partners — партнёрская программа казино LuckyBear с выплатами RevShare до 65% от NGR. 
          Работаем с арбитражным трафиком в нишах гемблинг, крипто-казино, ревшара партнёрки СНГ и бурж. 
          Подходим для вебмастеров, арбитражных команд и стримеров. Топ ГЕО: Россия, Казахстан, Украина, крипто-бурж.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap gap-2 max-w-2xl"
        >
          {SEO_KEYWORDS.map((kw, i) => (
            <span
              key={i}
              className="bg-white/5 border border-white/10 text-neutral-400 text-sm rounded-full px-3 py-1.5 hover:border-[#FFD700]/30 hover:text-[#FFD700] transition-colors cursor-default"
            >
              {kw}
            </span>
          ))}
        </motion.div>
      </section>
    )
  }

  if (variant === 'contacts') {
    return (
      <section id={id} className="relative h-screen w-full snap-start flex flex-col justify-center p-8 md:p-16 lg:p-24">
        <motion.div
          className="flex items-center gap-3 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
        >
          <img
            src="https://cdn.poehali.dev/projects/5d972cd9-de95-4814-b26f-7a1593951e0d/bucket/e8422093-8dba-4743-a5df-ae7d06ca3950.png"
            alt="LuckyBear"
            className="w-10 h-10 object-contain drop-shadow-[0_0_8px_rgba(100,160,255,0.5)]"
          />
          <span className="text-white font-black text-2xl tracking-widest">LUCKYBEAR<span className="text-[#FFD700]"> PARTNERS</span></span>
        </motion.div>
        <motion.h2
          className="text-4xl md:text-6xl font-black text-white mb-4 leading-tight"
          initial={{ opacity: 0, y: 50 }}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          {title}
        </motion.h2>
        <motion.p
          className="text-neutral-300 text-xl max-w-xl mb-10 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={isActive ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {content}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col gap-3 max-w-sm"
        >
          <Button
            size="lg"
            onClick={() => window.open('https://t.me/Luckybear_partners_bot', '_blank')}
            className="bg-[#FFD700] text-black font-bold hover:bg-[#FFC200] w-full justify-start gap-3"
          >
            <Icon name="Bot" size={20} />
            @Luckybear_partners_bot
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => window.open('https://t.me/ecalp', '_blank')}
            className="text-white border-white/20 bg-white/5 hover:bg-white/10 w-full justify-start gap-3"
          >
            <Icon name="User" size={20} />
            Тим-лид @ecalp
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => window.open('https://t.me/oyesxa', '_blank')}
            className="text-white border-white/20 bg-white/5 hover:bg-white/10 w-full justify-start gap-3"
          >
            <Icon name="User" size={20} />
            Тим-лид @oyesxa
          </Button>
        </motion.div>
        <motion.p
          className="mt-8 text-neutral-600 text-sm"
          initial={{ opacity: 0 }}
          animate={isActive ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
        >© 2026 LuckyBear Partners. Все права защищены.</motion.p>
      </section>
    )
  }

  return (
    <section id={id} className="relative h-screen w-full snap-start flex flex-col justify-center p-8 md:p-16 lg:p-24">
      {subtitle && (
        <motion.div className="mb-12" initial={{ opacity: 0, y: 20 }} animate={isActive ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }}>
          {subtitle}
        </motion.div>
      )}
      <motion.h2
        className="text-4xl md:text-6xl font-black leading-tight max-w-4xl text-white"
        initial={{ opacity: 0, y: 50 }}
        animate={isActive ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        {title}
      </motion.h2>
      {content && (
        <motion.p
          className="text-lg md:text-xl max-w-2xl mt-6 text-neutral-400"
          initial={{ opacity: 0, y: 50 }}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {content}
        </motion.p>
      )}
      {showButton && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12"
        >
          <Button
            size="lg"
            onClick={handleButtonClick}
            className="bg-[#FFD700] text-black font-bold hover:bg-[#FFC200]"
          >
            {buttonText}
          </Button>
        </motion.div>
      )}
    </section>
  )
}