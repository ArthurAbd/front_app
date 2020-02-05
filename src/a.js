import React from 'react'
import s from './a.module.sass'
import iconCity from './assets/icon/iconCity.svg'
import iconLike from './assets/icon/iconLike.svg'
import iconFilter from './assets/icon/iconFilter.svg'
import cardImg from './assets/img/cardImg.jpg'
import Map from 'pigeon-maps'

const A = () => {

    const mapHeight = window.innerHeight - 194

    return (
        <>
            <div className={s.Header}>
                <div className={s.Container}>
                    <div className={s.HeaderNav}>
                        <div className={s.HeaderLogoMenu}>
                            <div className={s.Logotype}>RentalRoom</div>
                            <div className={s.CityMenu}>
                                <img src={iconCity} />
                                Москва
                            </div>
                        </div>
                        <div className={s.HeaderLinks}>
                            <div className={s.active}>
                                Подобрать квартиру
                            </div>
                            <div>
                                Ответы и вопросы
                            </div>
                            <div>
                                Еще пункт
                            </div>
                        </div>
                        <div className={s.HeaderUserMenu}>
                            <div>
                                Сдать квартиру
                            </div>
                            <div>
                                <button>
                                    Войти
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={s.Filter}>
                <div className={s.BtnGroup}>
                    <span>Кол-во комнат</span>
                    <div>
                        <button>Комната</button>
                        <button className={s.active}>Студия</button>
                        <button>1</button>
                        <button>2</button>
                        <button>3</button>
                        <button>4+</button>
                    </div>
                </div>
                <div className={s.PriceInput}>
                    <span>Цена от</span>
                    <div>
                        <input type='text' placeholder='Введите цену' />
                    </div>
                </div>
                <div className={s.PriceInput}>
                    <span>Цена до</span>
                    <div>
                        <input type='text' placeholder='Введите цену' />
                    </div>
                </div>
            </div>
            <div className={s.Content}>
                <div className={s.ContentFilter}>
                    <div className={s.AddressInput}>
                        <input type='text' placeholder='Введите адрес' />
                    </div>
                    <div className={s.Sorting}>
                        <span>Сортировать</span>
                        <button>
                            <img src={iconFilter} />
                        </button>
                    </div>
                </div>
                <div className={s.CardsBlock}>
                    <div className={s.Card}>
                        <div className={s.CardImg}>
                            <img src={cardImg} />
                        </div>
                        <div className={s.CardContent}>
                            <div className={s.CardTitle}>Однокомнатная квартира 24 м2</div>
                            <div className={s.CardAddress}>Республика Татарстан, Казань, Ленинградская ул., 22</div>
                            <div className={s.CardType}>1-комнатная</div>
                            <div className={s.CardPrice}>
                                <div>40 000 Р <span> / мес.</span></div>
                                <div><img src={iconLike} /></div>
                            </div>
                        </div>
                    </div>
                    <div className={s.Card}>
                        <div className={s.CardImg}>
                            <img src={cardImg} />
                        </div>
                        <div className={s.CardContent}>
                            <div className={s.CardTitle}>Однокомнатная квартира 24 м2</div>
                            <div className={s.CardAddress}>Республика Татарстан, Казань, Ленинградская ул., 22</div>
                            <div className={s.CardType}>1-комнатная</div>
                            <div className={s.CardPrice}>
                                <div>40 000 Р <span> / мес.</span></div>
                                <div><img src={iconLike} /></div>
                            </div>
                        </div>
                    </div>
                    <div className={s.Card}>
                        <div className={s.CardImg}>
                            <img src={cardImg} />
                        </div>
                        <div className={s.CardContent}>
                            <div className={s.CardTitle}>Однокомнатная квартира 24 м2</div>
                            <div className={s.CardAddress}>Республика Татарстан, Казань, Ленинградская ул., 22</div>
                            <div className={s.CardType}>1-комнатная</div>
                            <div className={s.CardPrice}>
                                <div>40 000 Р <span> / мес.</span></div>
                                <div><img src={iconLike} /></div>
                            </div>
                        </div>
                    </div>
                    <div className={s.Card}>
                        <div className={s.CardImg}>
                            <img src={cardImg} />
                        </div>
                        <div className={s.CardContent}>
                            <div className={s.CardTitle}>Однокомнатная квартира 24 м2</div>
                            <div className={s.CardAddress}>Республика Татарстан, Казань, Ленинградская ул., 22</div>
                            <div className={s.CardType}>1-комнатная</div>
                            <div className={s.CardPrice}>
                                <div>40 000 Р <span> / мес.</span></div>
                                <div><img src={iconLike} /></div>
                            </div>
                        </div>
                    </div>
                    <div className={s.Card}>
                        <div className={s.CardImg}>
                            <img src={cardImg} />
                        </div>
                        <div className={s.CardContent}>
                            <div className={s.CardTitle}>Однокомнатная квартира 24 м2</div>
                            <div className={s.CardAddress}>Республика Татарстан, Казань, Ленинградская ул., 22</div>
                            <div className={s.CardType}>1-комнатная</div>
                            <div className={s.CardPrice}>
                                <div>40 000 Р <span> / мес.</span></div>
                                <div><img src={iconLike} /></div>
                            </div>
                        </div>
                    </div>
                    <div className={s.Card}>
                        <div className={s.CardImg}>
                            <img src={cardImg} />
                        </div>
                        <div className={s.CardContent}>
                            <div className={s.CardTitle}>Однокомнатная квартира 24 м2</div>
                            <div className={s.CardAddress}>Республика Татарстан, Казань, Ленинградская ул., 22</div>
                            <div className={s.CardType}>1-комнатная</div>
                            <div className={s.CardPrice}>
                                <div>40 000 Р <span> / мес.</span></div>
                                <div><img src={iconLike} /></div>
                            </div>
                        </div>
                    </div>
                    <div className={s.Card}>
                        <div className={s.CardImg}>
                            <img src={cardImg} />
                        </div>
                        <div className={s.CardContent}>
                            <div className={s.CardTitle}>Однокомнатная квартира 24 м2</div>
                            <div className={s.CardAddress}>Республика Татарстан, Казань, Ленинградская ул., 22</div>
                            <div className={s.CardType}>1-комнатная</div>
                            <div className={s.CardPrice}>
                                <div>40 000 Р <span> / мес.</span></div>
                                <div><img src={iconLike} /></div>
                            </div>
                        </div>
                    </div>
                    <div className={s.Card}>
                        <div className={s.CardImg}>
                            <img src={cardImg} />
                        </div>
                        <div className={s.CardContent}>
                            <div className={s.CardTitle}>Однокомнатная квартира 24 м2</div>
                            <div className={s.CardAddress}>Республика Татарстан, Казань, Ленинградская ул., 22</div>
                            <div className={s.CardType}>1-комнатная</div>
                            <div className={s.CardPrice}>
                                <div>40 000 Р <span> / мес.</span></div>
                                <div><img src={iconLike} /></div>
                            </div>
                        </div>
                    </div>
                    <div className={s.Card}>
                        <div className={s.CardImg}>
                            <img src={cardImg} />
                        </div>
                        <div className={s.CardContent}>
                            <div className={s.CardTitle}>Однокомнатная квартира 24 м2</div>
                            <div className={s.CardAddress}>Республика Татарстан, Казань, Ленинградская ул., 22</div>
                            <div className={s.CardType}>1-комнатная</div>
                            <div className={s.CardPrice}>
                                <div>40 000 Р <span> / мес.</span></div>
                                <div><img src={iconLike} /></div>
                            </div>
                        </div>
                    </div>
                    <div className={s.Card}>
                        <div className={s.CardImg}>
                            <img src={cardImg} />
                        </div>
                        <div className={s.CardContent}>
                            <div className={s.CardTitle}>Однокомнатная квартира 24 м2</div>
                            <div className={s.CardAddress}>Республика Татарстан, Казань, Ленинградская ул., 22</div>
                            <div className={s.CardType}>1-комнатная</div>
                            <div className={s.CardPrice}>
                                <div>40 000 Р <span> / мес.</span></div>
                                <div><img src={iconLike} /></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={s.Map}>
                    <Map center={[50.879, 4.6997]} zoom={12} height={mapHeight} />
                </div>
            </div>
        </>
    )
}

export default A