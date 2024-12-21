/* Container.js */

import { useState } from 'react'
import { FaStar } from 'react-icons/fa'
import { FaBook } from 'react-icons/fa';


// 메인 창 (메인 헤더 / 메인 컨텐츠 -> 아이템 리스트 -> 아이템)
const Main = ({recommendBooks, wishBooks}) => {
  const [isRecommendActive, setIsRecommendActive] = useState(true)

  return (
    <div className="main">
      <Header
        className="main_header"
        isRecommendActive={isRecommendActive}
        setIsRecommendActive={setIsRecommendActive}
      />
      <Contents
        className="main_contents"
        isRecommendActive={isRecommendActive}
        recommendBooks={recommendBooks}
        wishBooks={wishBooks}
      />
    </div>
  )
}

// 메인 헤더 (주제, 추천도서/도서 리스트 버튼 포함)
const Header = ({ isRecommendActive, setIsRecommendActive }) => {
  return (
    <div className="title">
      <h2 className="title_heading" id="best_tab">

        <span className="title_name">내가 좋아했던 독서</span>

        <button
          type="button"
          className={`btn_title ${isRecommendActive ? "active" : ""}`}
          onClick={() => setIsRecommendActive(true)}>
          추천 도서
        </button>

        <button
          type="button"
          className={`btn_title ${!isRecommendActive ? "active" : ""}`}
          onClick={() => setIsRecommendActive(false)}>
          도서 리스트
        </button>

      </h2>
    </div>
  )
}

// 메인 컨텐츠 (아이템 리스트 -> 아이템)
const Contents = ({isRecommendActive, recommendBooks, wishBooks}) => {
  return (
    <div className="items">
      {isRecommendActive ? (
        <div className="btn_clicked_item">
          <RecommendITEMLIST books={recommendBooks} />
        </div>
      ) : (
        <div className="btn_clicked_item">
          <WishItemList books={wishBooks} />
        </div>
      )}
    </div>
  )
}

// 아이템 리스트 (추천도서 / 아이템)
const RecommendITEMLIST = ({books}) => {
  return (
    <div className="reommand_list">
      <ul className="item_ul">
        {books.map((book) => (
          <li className="item" key={book.id}>
            <RecommendItem
              book={book}/>
          </li>
        ))}
      </ul>
    </div>
  )
}

const WishItemList = ({books}) => {
  return (
    <div className="wish_list">
      <ul className="item_ul">
            {books.map((book) => (
              <li className="item" key={book.id}>
                <WishItem
                  book={book}/>
              </li>
            ))}
      </ul>
    </div>
  )
}

// 추천 도서 아이템 (아이템 헤더 -> 번호, 점수 / 아이템 이미지 / 아이템 정보 박스 -> title=제목. content=작가, 출판사)
const RecommendItem = ({book}) => {
  return (
    <>
        <div className="item_head">
          <div className="item_index">
          {
              [...Array(book.index)].map((_, index) => 
              <FaBook key={index}/>
            )}
          </div>

          <div className="item_rating">
            {
              [...Array(book.rating)].map((_, index) => 
              <FaStar key={index}/>
            )}
          </div>
        </div>

        <div className="item_img">
          <a href={`https://library.kumoh.ac.kr/#/total-search?keyword=${book.title}`}>
            <span>
              <img alt={`도서 이미지 ${book.index}`} 
                src={book.img}/>
            </span>
          </a>
        </div>

        <div className="item_info">
          <div className="item_info_title">
            <a href={`https://library.kumoh.ac.kr/#/total-search?keyword=${book.title}`}>
              {book.title}
            </a>
          </div>

          <div className="item_info_writer">
            <span>{book.writer}</span>
          </div>
          <div className="item_info_publisher">
            <span>{book.publisher}</span>
          </div>
        </div>
    </>
  )
}

// 도서 리스트 아이템 ( 추천 도서 아이템과 동일 )
const WishItem = RecommendItem

export default Main