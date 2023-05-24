import monural from "./medicament/monural";
import rinofluimucil from "./medicament/rinofluimucil";
import fluimucil from "./medicament/fluimucil";
import enterol_caps from "./medicament/enterol_caps";
import enterol_sache from "./medicament/enterol_sache";
import stresam from "./medicament/stresam";
import otipaks from "./medicament/otipaks";
import idrinol from "./medicament/idrinol";
import kompligamb from "./medicament/kompligamb";
import lipotiokson from "./medicament/lipotiokson";
import neiroks from "./medicament/neiroks";
import spilotta from "./medicament/spilotta";
import sustagard from "./medicament/sustagard";
import hondrogard from "./medicament/hondrogard";
import cereton_caps from "./medicament/cereton_caps";
import cereton_ampoules from "./medicament/cereton_ampoules";
import flamadeks from "./medicament/flamadeks";
import pantogam_caps from "./medicament/pantogam_caps";
import pantogam_tab_250 from "./medicament/pantogam_tab_250";
import pantogam_tab_500 from "./medicament/pantogam_tab_500";
import pantogam_syrup from "./medicament/pantogam_syrup";
import elkar_ampoules from "./medicament/elkar_ampoules";
import elkar_solution from "./medicament/elkar_solution";
import ferveks_for_adult from "./medicament/ferveks_for_adult";
import ferveks_malina from "./medicament/ferveks_malina";
import ferveks_no_sugar from "./medicament/ferveks_no_sugar";
import albunorm from "./medicament/albunorm";
import eljina from "./medicament/eljina";
import allervil from "./medicament/allervil";
import raksaban from "./medicament/raksaban";
import citioksP from "./medicament/citioksP";
import galavit_tab_25 from "./medicament/galavit_tab_25";
import galavit_supp_100 from "./medicament/galavit_supp_100";
import galavit_supp_50 from "./medicament/galavit_supp_50";
import galavit_por_100 from "./medicament/galavit_por_100";
import galavit_por_50 from "./medicament/galavit_por_50";
import zugrel from "./medicament/zugrel";
import sofoled from "./medicament/sofoled";
import sofas from "./medicament/sofas";
import daklos from "./medicament/daklos";
import velpavir from "./medicament/velpavir";
import biavir from "./medicament/biavir";
import nefroket from "./medicament/nefroket";
import revarton from "./medicament/revarton";
import kaberolgin from "./medicament/kaberolgin";
import propofol from "./medicament/propofol";
import emaglif from "./medicament/emaglif";
import pegnano from "./medicament/pegnano";
import durex_classic from "./medicament/durex_classic";
import contex_classic from "./medicament/contex_classic";
import nurofen_express from "./medicament/nurofen_express";
import nurofen_kids from "./medicament/nurofen_kids";
import nurofen_yellow from "./medicament/nurofen_yellow";
import nurofen_gray from "./medicament/nurofen_gray";
import strepsils_limon from "./medicament/strepsils_limon";
import strepsils_klubnika from "./medicament/strepsils_klubnika";
import strepsils_express from "./medicament/strepsils_express";
import upsarin from "./medicament/upsarin";
import efferalgan from "./medicament/efferalgan";
import evolerin from "./medicament/evolerin";

const products = [
  {
    id: 1,
    name: "Монурал",
    desc: "Гранулы",
    category: "м",
    link: "монурал",
    img: monural.img,
    content: monural.content,
  },
  {
    id: 2,
    name: "Ринофлуимуцил",
    desc: "Спрей назальный 10мл",
    category: "р",
    link: "ринофлуимуцил",
    img: rinofluimucil.img,
    content: rinofluimucil.content,
  },
  {
    id: 3,
    name: "Флуимуцил",
    desc: "Таблетки шипучие 600мг",
    category: "ф",
    link: "флуимуцил",
    img: fluimucil.img,
    content: fluimucil.content,
  },
  {
    id: 4,
    name: "Энтерол",
    desc: "Капсулы 250мг",
    category: "э",
    link: "энтерол-2",
    img: enterol_caps.img,
    content: enterol_caps.content,
  },
  {
    id: 5,
    name: "Энтерол",
    desc: "Саше-пакетик 250мг",
    category: "э",
    link: "энтерол",
    img: enterol_sache.img,
    content: enterol_sache.content,
  },
  {
    id: 6,
    name: "Стрезам",
    desc: "Капсулы 50мг",
    category: "с",
    link: "стрезам",
    img: stresam.img,
    content: stresam.content,
  },
  {
    id: 7,
    name: "Отипакс",
    desc: "Капли ушные 15мл (16г)",
    category: "о",
    link: "отипакс",
    img: otipaks.img,
    content: otipaks.content,
  },
  {
    id: 8,
    name: "Идринол",
    desc: "Ампулы 100мг/мл",
    category: "и",
    link: "идринол",
    img: idrinol.img,
    content: idrinol.content,
  },
  {
    id: 9,
    name: "КомплигамВ",
    desc: "Ампулы 100мг/мл",
    category: "к",
    link: "комплигамв",
    img: kompligamb.img,
    content: kompligamb.content,
  },
  {
    id: 10,
    name: "Липотиоксон",
    desc: "Ампулы 25мг/мл",
    category: "л",
    link: "липотиоксон",
    img: lipotiokson.img,
    content: lipotiokson.content,
  },
  {
    id: 11,
    name: "Нейрокс",
    desc: "Ампулы 100мг/250мг",
    category: "н",
    link: "нейрокс",
    img: neiroks.img,
    content: neiroks.content,
  },
  {
    id: 12,
    name: "Спилотта",
    desc: "Таблетки 50/1000 - 50/500",
    category: "с",
    link: "спилотта",
    img: spilotta.img,
    content: spilotta.content,
  },
  {
    id: 13,
    name: "Сустагард Артро",
    desc: "Ампулы",
    category: "с",
    link: "сустагард-артро",
    img: sustagard.img,
    content: sustagard.content,
  },
  {
    id: 14,
    name: "Хондрогард",
    desc: "Ампулы 100мг/мл",
    category: "х",
    link: "хондрогард",
    img: hondrogard.img,
    content: hondrogard.content,
  },
  {
    id: 15,
    name: "Церетон",
    desc: "Капсулы 400мг",
    category: "ц",
    link: "церетон-2",
    img: cereton_caps.img,
    content: cereton_caps.content,
  },
  {
    id: 16,
    name: "Церетон",
    desc: "Ампулы 250мг/мл",
    category: "ц",
    link: "церетон",
    img: cereton_ampoules.img,
    content: cereton_ampoules.content,
  },
  {
    id: 17,
    name: "Фламадекс",
    desc: "Ампулы 25мг/мл",
    category: "ф",
    link: "фламадекс",
    img: flamadeks.img,
    content: flamadeks.content,
  },
  {
    id: 18,
    name: "Пантогам актив",
    desc: "Капсулы 300мг",
    category: "п",
    link: "пантогам-3",
    img: pantogam_caps.img,
    content: pantogam_caps.content,
  },
  {
    id: 19,
    name: "Пантогам",
    desc: "Таблетки 250мг",
    category: "п",
    link: "пантогам-таблетки-250мг",
    img: pantogam_tab_250.img,
    content: pantogam_tab_250.content,
  },
  {
    id: 20,
    name: "Пантогам",
    desc: "Таблетки 500мг",
    category: "п",
    link: "пантогам",
    img: pantogam_tab_500.img,
    content: pantogam_tab_500.content,
  },
  {
    id: 21,
    name: "Пантогам",
    desc: "Сироп",
    category: "п",
    link: "пантогам-2",
    img: pantogam_syrup.img,
    content: pantogam_syrup.content,
  },
  {
    id: 22,
    name: "Элькар",
    desc: "Ампулы 100мг/мл",
    category: "э",
    link: "элькар-растров-для-инъекций",
    img: elkar_ampoules.img,
    content: elkar_ampoules.content,
  },
  {
    id: 23,
    name: "Элькар",
    desc: "Раствор 300мг",
    category: "э",
    link: "элькар",
    img: elkar_solution.img,
    content: elkar_solution.content,
  },
  {
    id: 24,
    name: "Фервекс",
    desc: "Для взрослых",
    category: "ф",
    link: "фервекс-3",
    img: ferveks_for_adult.img,
    content: ferveks_for_adult.content,
  },
  {
    id: 25,
    name: "Фервекс",
    desc: "Для взрослых со вкусом малины",
    category: "ф",
    link: "фервекс-2",
    img: ferveks_malina.img,
    content: ferveks_malina.content,
  },
  {
    id: 26,
    name: "Фервекс",
    desc: "Для взрослых без сахара",
    category: "ф",
    link: "фервекс",
    img: ferveks_no_sugar.img,
    content: ferveks_no_sugar.content,
  },
  {
    id: 27,
    name: "Альбунорм",
    desc: "Раствор для инфузий 5%/20%",
    category: "а",
    link: "альбунорм",
    img: albunorm.img,
    content: albunorm.content,
  },
  {
    id: 28,
    name: "Эльжина",
    desc: "Таблетки вагинальные",
    category: "э",
    link: "эльжина",
    img: eljina.img,
    content: eljina.content,
  },
  {
    id: 29,
    name: "Аллервил",
    desc: "Таблетки 5мг/10мг",
    category: "а",
    link: "аллервил",
    img: allervil.img,
    content: allervil.content,
  },
  {
    id: 30,
    name: "Раксабан",
    desc: "Таблетки 10мг, 15мг, 20мг",
    category: "р",
    link: "раксабан",
    img: raksaban.img,
    content: raksaban.content,
  },
  {
    id: 31,
    name: "Цитиокс П",
    desc: "Таблетки 500мг/800мг",
    category: "ц",
    link: "цитиокс-п",
    img: citioksP.img,
    content: citioksP.content,
  },
  {
    id: 32,
    name: "Галавит",
    desc: "Таблетки 25мг",
    category: "г",
    link: "галавит-5",
    img: galavit_tab_25.img,
    content: galavit_tab_25.content,
  },
  {
    id: 33,
    name: "Галавит",
    desc: "Суппозитории 100мг",
    category: "г",
    link: "галавит-4",
    img: galavit_supp_100.img,
    content: galavit_supp_100.content,
  },
  {
    id: 34,
    name: "Галавит",
    desc: "Суппозитории 50мг",
    category: "г",
    link: "галавит-2",
    img: galavit_supp_50.img,
    content: galavit_supp_50.content,
  },
  {
    id: 35,
    name: "Галавит",
    desc: "Порошок 100мг",
    category: "г",
    link: "галавит-3",
    img: galavit_por_100.img,
    content: galavit_por_100.content,
  },
  {
    id: 36,
    name: "Галавит",
    desc: "Порошок 50мг",
    category: "г",
    link: "галавит",
    img: galavit_por_50.img,
    content: galavit_por_50.content,
  },
  {
    id: 37,
    name: "Зугрел",
    desc: "Таблетки 10мг",
    category: "з",
    link: "зугрел",
    img: zugrel.img,
    content: zugrel.content,
  },
  {
    id: 38,
    name: "Софолед",
    desc: "Таблетки 90/400мг",
    category: "с",
    link: "софолед",
    img: sofoled.img,
    content: sofoled.content,
  },
  {
    id: 39,
    name: "Софас",
    desc: "Таблетки 400мг",
    category: "с",
    link: "софас",
    img: sofas.img,
    content: sofas.content,
  },
  {
    id: 40,
    name: "Даклос",
    desc: "Таблетки 600мг",
    category: "д",
    link: "даклос",
    img: daklos.img,
    content: daklos.content,
  },
  {
    id: 41,
    name: "Велпавир",
    desc: "Таблетки 100/400мг",
    category: "в",
    link: "велпавир",
    img: velpavir.img,
    content: velpavir.content,
  },
  {
    id: 42,
    name: "Биавир",
    desc: "Таблетки 0.5мг",
    category: "б",
    link: "биавир",
    img: biavir.img,
    content: biavir.content,
  },
  {
    id: 43,
    name: "Нефрокет",
    desc: "Таблетки",
    category: "н",
    link: "нефрокет",
    img: nefroket.img,
    content: nefroket.content,
  },
  {
    id: 44,
    name: "Ревартон",
    desc: "Порошок 1г",
    category: "р",
    link: "ревартон",
    img: revarton.img,
    content: revarton.content,
  },
  {
    id: 45,
    name: "Каберголин-орвилле ТАБ",
    desc: "Таблетки 0.5мг",
    category: "к",
    link: "каберголин-орвилле-таб",
    img: kaberolgin.img,
    content: kaberolgin.content,
  },
  {
    id: 46,
    name: "Пропофол-Орвилле",
    desc: "Ампулы 1% 20мл",
    category: "п",
    link: "пропофол-орвилле",
    img: propofol.img,
    content: propofol.content,
  },
  {
    id: 47,
    name: "Эмаглиф",
    desc: "Таблетки 10мг/25мг",
    category: "э",
    link: "эмаглиф",
    img: emaglif.img,
    content: emaglif.content,
  },
  {
    id: 48,
    name: "Пегнано",
    desc: "Раствор для инъекций",
    category: "п",
    link: "пегнано",
    img: pegnano.img,
    content: pegnano.content,
  },
  {
    id: 49,
    name: "Дюрекс Classic",
    desc: "Презервативы",
    category: "д",
    link: "дюрекс-классик-№3",
    img: durex_classic.img,
    content: durex_classic.content,
  },
  {
    id: 50,
    name: "Контекс Classic",
    desc: "Презервативы",
    category: "к",
    link: "контекс-classic-упаковка-3-шт",
    img: contex_classic.img,
    content: contex_classic.content,
  },
  {
    id: 51,
    name: "Нурофен® ЭКСПРЕСС",
    desc: "Капсулы",
    category: "н",
    link: "нурофен-экспресс",
    img: nurofen_express.img,
    content: nurofen_express.content,
  },
  {
    id: 52,
    name: "Нурофен® для детей",
    desc: "Ибупрофен 100мг (сироп)",
    category: "н",
    link: "нурофен-для-детей",
    img: nurofen_kids.img,
    content: nurofen_kids.content,
  },
  {
    id: 53,
    name: "Нурофен",
    desc: "Таблетки 200мг",
    category: "н",
    link: "нурофен-2",
    img: nurofen_yellow.img,
    content: nurofen_yellow.content,
  },
  {
    id: 54,
    name: "Нурофен",
    desc: "Таблетки 200мг",
    category: "н",
    link: "нурофен",
    img: nurofen_gray.img,
    content: nurofen_gray.content,
  },
  {
    id: 55,
    name: "Стрепсилс",
    desc: "Таблетки с медом и лимоном",
    category: "с",
    link: "стрепсилс-2",
    img: strepsils_limon.img,
    content: strepsils_limon.content,
  },
  {
    id: 56,
    name: "Стрепсилс",
    desc: "Таблетки для детей с клубникой",
    category: "с",
    link: "стрепсилс",
    img: strepsils_klubnika.img,
    content: strepsils_klubnika.content,
  },
  {
    id: 57,
    name: "Стрепсилс® Экспресс",
    desc: "Таблетки для рассасывания",
    category: "с",
    link: "стрепсилс-экспресс",
    img: strepsils_express.img,
    content: strepsils_express.content,
  },
  {
    id: 58,
    name: "Упсарин Упса",
    desc: "Таблетки 500мг",
    category: "у",
    link: "упсарин-упса",
    img: upsarin.img,
    content: upsarin.content,
  },
  {
    id: 59,
    name: "Эффералган",
    desc: "Таблетки 500мг (шипучие)",
    category: "э",
    link: "эффералган",
    img: efferalgan.img,
    content: efferalgan.content,
  },
  {
    id: 60,
    name: "Эволерин",
    desc: "Лиофизилизат для приготовления суспензии",
    category: "э",
    link: "эволерин",
    img: evolerin.img,
    content: evolerin.content,
  },
];

export default products;
