import type { ReactNode } from "react";
import type { MetaFunction } from '@remix-run/cloudflare';

export const meta: MetaFunction = () => ({
  title: "Bookshelf",
})

const BOOK_LIST = [
  { title: 'The Quran' },
  { title: 'His Dark Materials', link: 'https://www.amazon.com/Materials-Trilogy-Golden-Compass-Spyglass/dp/B00BSZWZPE/ref=sr_1_8?crid=HI3MIEYJBMJ4&dib=eyJ2IjoiMSJ9.migUPJk0hiuO5O-NpvUJWQIbqnixvsjkIoXjPPNCzou_Aps23O-j464fnrFat5ni3I_-QxVRN0baHsbJdohtKLbOpQj_i-ImuLTPWIWito4mMMw7f5QMbVHAiuR_yJocXCKpxzrN05wZY-egOG5B1gqRwRuFycbPa7jaEtFJxBuWYeNRazn9macGzBQBXdvSQMj0Ej1oONwSuBMeuGo7obdxaDHXXk1_OhlXnT0H3Nc.GBhorePzi_4psFAhEcjS3XuiSPdUKwzGKtstaqAEdrM&dib_tag=se&keywords=his+dark+materials&qid=1711050625&sprefix=his+dark+mate%2Caps%2C118&sr=8-8' },
  { title: 'Seveneves', link: 'https://www.amazon.com/Seveneves-Novel-Neal-Stephenson-ebook/dp/B00LZWV8JO/ref=sr_1_1?crid=51PSD1BBO3XP&dib=eyJ2IjoiMSJ9.Bw4mw2QQ00zsfIdRLWlrixarQZMsDkAInD5REFn9KXTvQPHtWKIwNz0eDMQMoJX_DRWtBDBymVCfGI9cmmqgYj-41HMxXJZ0eYoTxd3Hja0Hq8b6opgzNEDSCW4F5V0M2a5iZDgw2dycV24wkcsZdRCTGJnh5zYkNaxJjs_gIgF6s-9eFs1ml4wYu0ynx56Ve6O4tCzPVJza_shrjEfMGauSfBKWbp9qlzStURcGmVw.0OyNKH5cZlDgiIf4a8fH-6ArUQ_TOzz6WBez8Om8Hrw&dib_tag=se&keywords=seveneves+neal+stephenson&qid=1711050657&sprefix=seveneves%2Caps%2C103&sr=8-1' },
  { title: 'Creativity, Inc', link: 'https://www.amazon.com/Creativity-Inc-Overcoming-Unseen-Inspiration-ebook/dp/B00FUZQYBO/ref=sr_1_1?crid=3TJOENTAL0TB&dib=eyJ2IjoiMSJ9.Ga33QekNnDJStz7w_lPvgze2AGhDvWb6HMY7vU4GmHbz2DbPCt4KURDP9g97pFRummhpXLmn0K0tYuYuhLnR-l7xrQfYdO-asdWgzvTU1yRJmopYBN62EJ-IL6VUjwTZ_hNwlUWx2Bo-cRXdfYAUdjaeBOlGNuWY4h-guWkCR4AGDs2NBnkvQPx3POcXpLpGdQxxEaaqiQZ-llPUJXcw5OdOFnyB1U1EyOdaxqzxitU.5f7_wYDmVyJK5kpsFok2KIb8rbym13waCe7fEtdrSt4&dib_tag=se&keywords=creativity+inc&qid=1711050670&sprefix=creativity%2Caps%2C111&sr=8-1' },
  { title: 'The Three-Body Trilogy', link: 'https://www.amazon.com/Three-Body-Problem-Boxed-Set-Remembrance/dp/1250254493/ref=sr_1_1?crid=I9A99DVJIV37&dib=eyJ2IjoiMSJ9.Oy1Eg5FD4n0z0fhX5EJukCK3_MFlJ1Rd6BcVV08GOaGBxG8FB67hp9flrd2QI0XGNZft-7r11ohYw2OdhRP2eIEUlnM7uA_JGzfMC5JF94RqL1EOnXhZSJrQvxsEjj7hXa7KQtsAWOD7cxQe9cs7TrqdUDBfa0GMewtFXIXLrmTP9je_JkX2P7CkVUUJQIRJKlArx-mwoZZ0pFyQOtojgePc2g2LB_DSv6O7lutUu5M.tq8Zd2qc8Y2GJX-X8MYSH3HBgmCjg_WBkCBC6ooKzR4&dib_tag=se&keywords=three+body+problem+trilogy&qid=1711050682&sprefix=three+body%2Caps%2C108&sr=8-1' },
  { title: 'Foundation', link: 'https://www.amazon.com/Foundation-Isaac-Asimov-ebook/dp/B000FC1PWA/ref=sr_1_1?crid=2PAE69SBVE8UF&dib=eyJ2IjoiMSJ9.nLMvMxRE3144e3lyUWZmRdu3StUyZeqOR2ah-g8LeXOuavPj7mTbTpzUkwg5huE53X2ZSIe64XiEZOTjYQLkQWJdGmDAeoTcE1ZsIpyh2pE73fOjAmXPjaPS9kyiUrLNGVzqJQKhJGA0vZjXlco6slrx23AUewqaY-9rdyDGnsEJwKTY0Gt02MBqjLoTy7NQKgNR7vogp3xfZFomFreas8GGOgwDHICmh5UTgzWIzxY.U7ASDrZwnVHSXZdkTV5jQ9HMChRtq4KPRdGIVZH6z4w&dib_tag=se&keywords=foundation+asimov&qid=1711050694&sprefix=foundation%2Caps%2C109&sr=8-1' },
  { title: 'Gödel, Escher, Bach', link: 'https://www.amazon.com/G%C3%B6del-Escher-Bach-Eternal-Golden/dp/0465026567/ref=sr_1_1?crid=32JV169ZBVSVG&dib=eyJ2IjoiMSJ9.6dcRnKD4pKMTttqWM7Xkj8W0F72-VtOFL6Dw8lAQQv6Z41T594n7A7WgmbOZ0GACls3P9U7EGOXQMjZ1l0P-03I2lUp4Xh8F_LUiJGxJfgctUIS02HK7ZC5EI3GRMaTwx4we0xE8mD-2g4T9mxBeZV2ZldxSLk1qfWmVJXEFUQz16DIrsM4G1OV-_RIBfjSUO5hja7a8-gpCsYot0DQOYmow5Urglwh8RiKGAhIL_sQ.fVcoyw8LjDS0bO9M1TGci0IBDFz7Vo9cXV-gKAdsgn8&dib_tag=se&keywords=godel+escher+bach+book&qid=1711050707&sprefix=godel+es%2Caps%2C117&sr=8-1' },
  { title: 'Zero to One', link: 'https://www.amazon.com/Zero-One-Notes-Startups-Future-ebook/dp/B00J6YBOFQ/ref=sr_1_1?crid=73BSRSU2MENH&dib=eyJ2IjoiMSJ9.xRkHQ6C1qGdeR50hoS7nte52uemHA3lCkbOOAfaDNa1WnrtXROnBzE4KL0MkKZKIPj3TSjr2Wt5F09SHrAPcMiBcLxqETfEYi7lz5qSnGKiMkRDux2HLKZGX1De9U2bGuY1WveJa0-oR0Xs4BJWmCGAwVzaYxDfP6HySfBIDgTfjcNoWL8-uxnU2bUGTwtwYIGqr2IkiZDphM0p_Kmr_C_tSZZg-SdJesfH8IRu4Bhc.C_jtWRWcug7SKmxqVjKbUKZZNFdIo5kwPvNtyfZXS10&dib_tag=se&keywords=zero+to+one&qid=1711050718&sprefix=zero+to+one%2Caps%2C111&sr=8-1' },
  { title: 'The Beginning of Infinity', link: 'https://www.amazon.com/Beginning-Infinity-Explanations-Transform-World-ebook/dp/B005DXR5ZC/ref=sr_1_1?crid=Z6JBBAIQ9VM7&dib=eyJ2IjoiMSJ9.P-1GPyfEnga2J6AXb9OgtTyUcquaqqWpQ1Gu0becvsGk9-BTr0liziJgQ7JGiYWbbRw4HXnXju3VTMuZ3UgwXxTANa99VxDA-iOcTTZ6a0ZCfupR90L-vdHX715X3nGuUPcYvObRuAwChy9iAAydYHkCh-nD0QxRRGappoFCvOBZNppQUppJGxdmMLBb3067pDMcj1l8231UO79geXP8vXgvECSZDWvQuxb41_K72E8.Li-BKzF-2kTGePOKNkZe7DWn8OKdbPQOFWiVMbmFmtc&dib_tag=se&keywords=the+beginning+of+infinity&qid=1711050729&sprefix=the+begin%2Caps%2C107&sr=8-1' },
  { title: 'A Brief History of Time', link: 'https://www.amazon.com/Brief-History-Time-Stephen-Hawking/dp/0553380168/ref=sr_1_1?crid=1YZUSCUTGFR2I&dib=eyJ2IjoiMSJ9.fRsXwxyv9ht3D_M3xazcTQCzOGEZF7Kp-qZJxAY9Ujo2198oBkYdYKsqT7ESO8jVOoLdCYETF2qgQT6wIpfuK72PHTIku8QABm0AqxzT5UH_uStmdi60NwIS7HOIWKKqZ4vG13eY1a2MQ1g-qBrISv8Avx1SHIXH8sdDiPlskTdTw81nQgvH5Bj9j3xdLxXu-om9TsHPCec3Ds_KM_TuZVcG7IA6V5emTMsDibvEpP0.SF0yNw5J94OFNcDPoiTbfiY4Mz3hSmnBGK46Xt-HcaM&dib_tag=se&keywords=a+brief+history+of+time+by+stephen+hawking&qid=1711050740&sprefix=a+brief+his%2Caps%2C110&sr=8-1' },
  { title: 'The Dream Machine', link: 'https://www.amazon.com/Dream-Machine-M-Mitchell-Waldrop-ebook/dp/B07GBCX7YC/ref=sr_1_1?crid=28G1O70RJ3LR2&dib=eyJ2IjoiMSJ9.wR-xopmJBXyfc9V5xkTfBq0urrhUz51PqzckejnNLz-JcIyKfTT-rCuzA2OgNw0Vfwbu0WwvieC2hpMGIis5YovEXDefn42WWTdC0ObmRtfahg3djyA1BgMUAMsyhSXJh32DlBhR-26_OSUVlSQjlHetOUu-hgO_25WodP9Hu6kTO7xbvq-JtERtpCT2tQQItQPAFmRKmejZf7svetBUPrYjEAiUpYoKi-aJmipOTKg.i0kheRonWUT-K_19FRkmtbK0WjuNNmFDEsv00c9Ucf8&dib_tag=se&keywords=the+dream+machine&qid=1711050758&sprefix=the+dream+machine%2Caps%2C109&sr=8-1' },
  { title: 'La Fortune de Gaspard', link: 'https://www.amazon.com/fortune-Gaspard-French-Comtesse-S%C3%A9gur-ebook/dp/B0BV16N7HX/ref=sr_1_1?crid=39XBLV6W327N6&dib=eyJ2IjoiMSJ9.LXOm7fswk0SxrjsGKjxQm8J4toTR0ZMVusyJnWJB7iv-GAwz128wjULQwmHOw_1h1KMfv0UJifURNjdE_nevIhqrkSN7_s_fzGSbnrdzJLQFMLY0IQzxPv-GLiCbicoHDkOgEuDMKGXjmkecNElQWjFIB00WrdQ40THNpijmpcE_c8ussQwTQdRINhIkpycK73lV3qvITFjF-N7mJL6kvRW1kIAmnLoTJqHnjdcunRc.iFYkWHF31-5f1PaFoYHipsoBhDc9mW5Ho0IrFGNz8JE&dib_tag=se&keywords=la+fortune+de+gaspard&qid=1711050769&sprefix=la+fortune+de+gaspar%2Caps%2C102&sr=8-1' },
  { title: 'Build', link: 'https://www.amazon.com/Build-Unorthodox-Guide-Making-Things-ebook/dp/B09BNJ6GBV/ref=sr_1_3?crid=5OFXIQR0W5JK&dib=eyJ2IjoiMSJ9.DmdRH9bv3hFmnUPEZfIkvmu3y9vlAV3FBu4_x5cuU91wRSrAahX57VuFX5fHK9RdzxyaRjEdL4e9_KdIwlpOOkblfCwwXK7gSinGc8_oru4r3ZpOWrNps5wamNUOrjvlNmgY2tIncIe-9aKPMBsqyqKsD4WZf9cOPjqFJ_9QGs_glcAphPvCbm4Nx6XebRlhzEgBZ0oi9GfgOZdoQ6U8Bq_M9dJ229-pUapO6JetiUA.5Scbl0HKcDErWjCnN625aUW3Ut9XWVAuIL8v_Yy9RsI&dib_tag=se&keywords=build&qid=1711050789&sprefix=build%2Caps%2C100&sr=8-3' },
  { title: 'Where\'s my flying car?', link: 'https://www.amazon.com/Where-Flying-Car-Storrs-Hall-ebook/dp/B09H478XG4/ref=sr_1_1?crid=1FJ6L0AO4C6N3&dib=eyJ2IjoiMSJ9.v_-4TfDp6M3KCjVeVMz4Cy_3ETrVqSHNNCJxeI7WiG8U1jf-mQfVQYSXBsNLBcNrwmDY1QsA3o3F0VPl0IA33xB85teQEfu1o7vK3RNSnuVXVQ7zd8u73gSvmJtUFsSVfRqJlW85jLpowDp-iEuJQz321jQdnKFNMoxqw1JvVrqnqz1SvypJGvfLaPZR5hQ9ZmKXt349sJ0wD7Cf5dhE-ooQtVRsYe4OcvWwyo1HYmc.QzuzV7mH3qsAEJNv5IVezYYe51Ia5rNTUjqTLfAnbRU&dib_tag=se&keywords=where%27s+my+flying+car&qid=1711050801&sprefix=where%27s+my+flying+car%2Caps%2C113&sr=8-1' }
]

type Book = {
  title: string,
  link?: string
}

type BookshelfItemProps = {
  book: Book
}

const BookshelfItem = ({ book }: BookshelfItemProps) => (
  <li className="list-inside list-disc ml-2">
    {typeof book.link !== 'undefined' ? (
      <a href={book.link} target="_blank" className="hover:text-dawn-500">
        {book.title}
      </a>
    ) : (
      <span>{book.title}</span>
    )
    }
  </li>
)

export default function Bookshelf() {
  return (
    <main>
      <p>
        I'm not going to list every single book I&apos;ve read as that would be meaningless. Instead, I&apos;m only including
        those that shaped who I am and how I think.
      </p>
      <ul className="my-2">
        {BOOK_LIST.map((book, index) => (
          <BookshelfItem key={`book_${index}`} book={book} />
        ))}
      </ul>
    </main>
  );
}