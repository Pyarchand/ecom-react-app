import React, { useState } from 'react'
import { Button, Card, Container, Row, Col } from 'react-bootstrap'

const Products = () => {
    const [Items, setItems] = useState([
        {
            id: 1,
            product_name: "Product 1",
            price: 9999,
            description: "Toyota India",
            Image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj7Fnx0Fx2kOHAU9715pcAAwfJHrML3rml7Q&s",
        },
        {
            id: 2,
            product_name: "Product 2",
            price: 9999,
            Image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdPpJyC3D9lQQ7RPa9WF_L-cG5v4wnOwkBnA&s",
        },
        {
            id: 3,
            product_name: "Product 3",
            price: 9999,
            Image: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxIREhUSExIWFRUVGBcYGRUVFxcYFxcZGhgXFxUVGB0aHSgjGB0lGxcVITEhJSkrLjouGB8zODMtNystMCsBCgoKDg0OGxAQGy0lICUvLy0tLS0vLy8tLi0tLS0tLS8tLS0tLS0tLS0tKy01LS0tLS0tLSstLS0tLS0tLS0tLf/AABEIAKgBLAMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAABQIDBAYHAQj/xABHEAACAQIDBQQFCAcGBgMAAAABAgADEQQSIQUGEzFBIlFhcTJSgZGhBxRCYpKisdEjQ3KyweHwFRYkM1OCCJOj0tTxc7PC/8QAGQEBAAMBAQAAAAAAAAAAAAAAAAEDBAIF/8QAKREBAAICAQMEAAYDAAAAAAAAAAECAxESBCExE0FRYRRxkaHh8CIyUv/aAAwDAQACEQMRAD8A7jERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBE8JtIDH74YanovErnXTD03qi40ILqMgN+haTETPhEzEeWwRNTpb8UmQ1OFUAVwro4y1UBtlfLyZCTa4PPTnJj+8OF/16f2p16dvhHOvylIkaNvYY/rk9hl5dqUTyqr75HC3wcq/LMiWRi6Z5Ov2hLqsDynLp7E8JnsBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERASE3h3ow+CH6RrubWQekb6LfuuQQOpIsATpLO9+3vmtI5CA9icxGYU15Zyo9I9FXqfAEjlyYQlzUe5rVCSzuc7Jfmt/BcoYrzI9XKBdjxTdTkyxRIbwb41qyqcuXOxy03By5VF2cpcNobakq4Zk0UGa1iNpV2YF3V7dGpU2Hda7hn+9fxnmOxNNqzNxKYChUQcRDoAGY6H1jlv1WihmIzqQSHVu/KQffNdMPGN6Zsl5mVneV2IzKWUsl1sSCAVDqLg9/Z9k1AYpvXb7TfnN221h2Wkp6qqX8DbPb3VAPZNDegQxABIBI9nT4WkdTuNWj3h3i7xpkJim9ZvtN+cyKWMb1m+035yNsR4SsNM8Xl3NWw4TaVQcqtQeVSoPwaT+ztv1hyr1f+Yx/evNFp1ZK4Igre5vqOfunUZJVzR0bCbad9HxFU372y+40wh+Mndk4uvT1pYrN9WsahXnc9omo5B5WYt4ZTrOVYDaRUg+8TbMDtblreT2lEWtHu6zhN5VGVcQnBLWAqXDUGY2GUVB6JJNgrhSel5PzlWA2wCCpsVYEMraqwPMEHmPAyZ2ZtKpQtwL1aXXDM3bXxw7sf+kxt6rLbKa7YvhdTN/03yJhbK2pSxKcSk2YciCCGVhzR1OqMOoIBmbKJjTQREQEREBERAREQEREBERAREQEREBERAREQEpdwBc8hKpxHH7+Yo4us/EU0BVqU0pMwHZpm2ZQCCSRZsxDelbpLMWObzqHGS/GErtzEVcTiipRsiO9Q6EgujBKCcvoqFqafSVu/WK23W4NM6VASGJZAwZcoB7JKmzWvbQ66zYcFt3DVlBavTuwHYfskHquosTful7AYvDVS606lJspAOUra5FwFPJvME66Td6fGuolg5bncw4ttlqq1Cp4xPUVVVm87i4YeOkubsU3qVwpHZZbkjuz0wTp3BrzuQwzD0Qw/ZLD8DOTbx7tDBYi3GCpVNVlSmDnpobimGBIGW5todRTJ0IET6naN7WRespfarcZnp6KrAEVHuEuAQQDbtdLWvNUq7BVXP+Kw+oBtmYd66XXuE3vdDD4Ph5Vr8Ws5FxW7LmwNgisTpqdQT8AJM1tiqNeGB4gW/CaIxUvEVtPhT6s1ns5JW3fLG4rUW8A5/wC2WH2BVH0EPiHb+Np2TZuwDiC6JXyOmU5Ddrq17PYtyurry+ifYqbm4+9krL5MSNO/QTPfH09Z1M/39GitskxuIcVOzKg/V/ZJb8JWtCpTGoKDmcw5eOoE6YN38e5qLww7U7BkK0yTfkRmbtDxkPWo4qkXXgVk4ZAfhh0Ck8r8Nra206GPSw+1v3OVveGtU9hYw9r5tWIOt1pOR5jTWZ9HZuOUADCVzbvo1PymWd5q1IlTUZTfVXUakaa3S9/PWVf3wcc2HmNP4zqOnrMeXM2n4eU6e0VFxgqx8OFUHx1H9dZK4XbWIp/5uGqU/E207rg2+F5Hpvm3rfemRS34qDlU+9J/Dfbibb9mw0N5aGcVUxKYfE2sXOq1AOVOuo9NRfRvSXppcGQ2J8pVT5wlCutNxUdUFSidBmIGYm5XKL3vfkD1Fpqo33Y+kQ37Rv8AiJ6N5MO/p4fDt506f/bE9PuPEJrktV3VK6tqGBHgQZcBnCExOzX9LCUge9CyHz7JElNmHAo4ZHrUwD6K1iFPS1xZh55unsmeejtH9/ld+J+nY4mo4bb/AGQKLo3hWcm46jMCWHmQ3LlJLZu8lOrU4JKCpa/6OoKi8wtibAqbsLBgL9LzNbFavmF1ctbeE5ERK1hERAREQEREBERAREQEREBERA1j5Qd5f7PwvEUA1ajcOnfkGIJLnwVVJ8TYdZwCplFFlBbQqQDyOUMCGvrexvfwN9bEb5/xDbVak+CRCLgV3IIuOdJVNvIOPaZzLC4nPT8x+GlvZaa+mtEdmfNEz3KOJZWDA6g3HPmNR8ZfxmPLtcZrdzMWN7DNqdSL8rkmwEwHYgzziS6LzCnXZmU8Wy+iSPLT8JeweMAqq9RFqgMCab6q4GuVvC2msjg08esFBYxbLqE1puXRsNtrZlRcr4FaH7NGlVT/AKYzfckgNmqKYqYYpwzezULKOdiAadiDfS3O+k5lhd4KOQo1EXtZalyGDdGNuevQyd2VtyrQHFovbVeInNKg5KzKdCRcC/O3XQWYOp76mImHOTBOtxMprG46qCOIM2Xlm7RHfZnzFR+zaUU98cTS9CvWQ93EaoB4fpS/wA9k2XZu0cHtBQrAUa1vRPosfqMf3Tr585qu92whhgz3sF5++03ziw332iJj5U48sxOpZafKBji6uMQrFTcBqa9RlNwuUkW9l7HoDMk/KJjTUWqVoZgQbqjrmsCLE5zcEEi3gDoROfYQPWNqdN3Opsqljpz0HOXPnDIbNmU8rOCD5azLFOnt8Ne7Q27eLe9sUSxwtKm7Zb1EqOGJXkdV1tYEdxAN5n4HeTZlRF+c4bLVAGdloU2QtbtMuXtAX1tbSaSMQLXINu8f18fhKDiKX1vcPzlkdPjjxOnPqS6HjN39kY2kRhsRSpVD6DF2SzdAyVOnTQXHwPN8Ru5i1cocNWYKbFkpM4Nuqsl1YHQ3GmsxMZTCs1QNcONBqCGRQCAVa56Ei3Jh1mNhsQ3plgLg6cySL9pbXN9NQfGx1FvMy2nnMS0VjttmNsbFDT5riLd5w9a/novOXtn7uVnYioj0UFiatalVpoBcAliRYcx8emow8HtStbNxSoseyCfHtCwPdqD7JfwO8eJpkVOIdL9l8lRT/tYa6XFj385Xyl1pMbf3WFCwpsxewDU6iDiEm2StQynJXpMNeySwva3dH4fYGLNx80r8xYjDVLn1r3Ww8NJlbW3lq1UWjTC4dBlcpSJdVc2J4Oa/AV7BsiG3O+lpE/21WZA/Hbm10vqQLWsSPO9u+TF5j3n9UcW77pbmYh6yNiaC0aIIzmqi8tS1g97dnqwA068p0yjiqHDehgaQKOq5axYCne7dpTqzWOUiwy9xnz6+PYmmTULXyBh6l9WYag3ty1HWbruZvA2Fo06SpnZmPDJNgFJ7DEC+lgWsD3y3HHqzqVeSeEbh3/A4ta1Nai8nVWF+YuL2PcdZkTkeyt+hhcVh8Hw2biNTQm4C00ZxSU/WIYi/Lkdek65KsuPhbSzHblGyIiVuyIiAiIgIiICIiAiIgIiIHB/+IHZrHHYOre61aRphfrU6hZvtcZBfwmj7Sp5GBFMUiy9qmuirUUslQKOgOVXt04ndO1/LRRQ0cIzEAjE5VJvYE0K5W+XW2dKfK/kZxLaxUMLHTM/7tJFPtFMH2y3FOp2ryRuNLeUN7ZjvSl2iw757fvmuJizN3hh8pj7Qa4UDqf5AfGSFVLiXKFc0QGQXr1LBCBdqanQZB/quToeYWxGrXWnNGoWY/KNbYdZR2wtIkXy1GCt9nmPbaZmzFemCj2Km4BBuLHRhJVdzqxqNQqVUTF5OKMKwY1HBGewc2Q1Ct2y5jyOtwQMfF7s4rDItWollZVYrccSmrEqjVqYOamGINidL6Gx0lEaXTG1GFxRH9f14zM29tqtXorRZiwzIALXY62AvzPpW9gkNn1/r2/G88qV2UZlJDKVZSOYKsCCPK09T1d4p/JjjHHOJbfh8DWwNJnfDcVVC5slVqZXLftWNM5gMzXIJ5nlKdoHG4y9RMMnDampVWY1GYGmKg7RABIRl0PLToJr+L3vx9WlwKmJZ6ZGqkJyI1W4F7a2Mz9ib87Rw9NaNJ0KrbKHph2FuWvcPHw7hPMjv2hr0hMJiWptaxFjZlNwQRoRryItMzF4YZRUT0DzHqn8r6fyntDCks9asVZnLM19BdiSWJFtbk6DSU0sYcxSil0PMNcg9CdTcC2k9THFopEX8+3yz21v/ABWEswKMbBiCDyysL5Wv0GpB8GJ5gTAamxazAKyGxFragi47PXTn5SZGyj0YH3zCx6gdh7EgAFkte3IKxI1tYDvHKZuowW/2l3jvHhhBc5GgXKeVrEnTllHpcucqRC5BsFt9EC1+YNgB7wbfGKjJyLEfYBNuVza58+c8arTJuW109QajkdBqfGYtLtrlXUhxa6EgIqgXtoCBa3QePLunnFIIqqQXIAIAsBc9172PcLd8rGMW+fMc2uuYdefLlKaeJUXtftc7VCL277c40na7Qp9s0lc5KpJY6jQc76kaa6nrYaTdN1MJxHNXLYA8OkAOV7BnA+qvd0zjpNU2ZUplgjnho1gWFzYdAbnRdZL7wbNbDFLFnoNotz6J5sNNAxN2B/Izb09OMcmfLbcxCQqU1G0cIVqrUYLRJKFCl/nBYZMmgBFmsbkZjfnPpOfL+5Gy6lTG4ZgVINamAcwzNldHbsk39EMT3a6z6gmfNExFYnz3XU9yIiULCIiAiIgIiICIiAiIgIiIHPvllU/N8KVNiMUCOXShiG0udDZSAeeums4RvJVyVcmcVRTuocCwI9K1jyILFf8AbPoz5T8PmwD1MubgOlYgc8im1YjuIpNUPsnzBtnEmpULE38fDkPgAJ3E9nMx3TmEoYOqABXdXOmoU3P7Byn3OZdfYNb9U9OsOWVWyP7Uq5bnwUtJ35DNhUq+Jq4jEKhpUEAXiWy8ZmBVhfQlVVj4ZlnXd4H2LWucTWwgbq/Gpo/2lYH3xyRxfOmIptTbJVpvSbuZSh87MJJbq4epWrYjhK3GTDVWpFeaVLooIPQ5C6KehYEWIE3Texdn08PVGF2slQFGthiwqXJBACFdFbuNr+M1PZVTFJg74esmGpmq7VsSzBLMoUU6JaxZgF7QRASeIZNrbRFdSwNl1qhKJVV0r4FlroXUhxRRw9ak2ax7BvVW9udUdQJM4ikox+NxRLso4+YXOSrSrUQlGje2mZq1JRzGXUDszC23jatanQV8dVq0aoILMuQMVrcNrqG1UKcwLG+nJb3GXshRWXPWr06NClWUtWAyvXNIt82pLTAytZGqehmsvDFrKubl01NT/wC+/wAZS1S3d5Hl3WMz9quq4qsVF04rsodWXsFyyKymxHZIBGkv1NtZhZcPh0/+Jcn4kk++bsN661M6UWidodTT6pb9lj/+g0zcNXCiyU2Pmbj7qi8uf2g/qfe/lPDtI9UP2v5TRWccd4v+zmeU+yr5tUqEGoco6L3eQ6eZ1maqJTXnlXqe/wAzzJke21CBonvJ/KR2JxLObsf4AeQk2z48cbr3lEUmfLOx21yeynZHf9I+Xd/XlIhXu3hPCPL3yk2HUe8zzcua+Sd2aK1isdm7bF3yOGw1LCrRBTiO2IJZg1YOy3QZSAP0SBO2G90nMR8qIqKQ1KtTZhVHEpVlzqalRGDUzUVsnYTJYWAu1hrpy0G/UHyuZfXAVW5UnPlTY/gJVp06ViflRpOxb5moN69RWzgstZ6fAo1OQzBaBKlTzIBuLCRW9O/SYvCLhKVJqQVqQLtUR3rU6VMKorkKC7h+1caeF9ZqlHd3Fvyw1f8A5TKPeRMpNz8cf1Dj9qpTT95hHGTaLeqQdAT5TbN2dvIF+bYkZ6DjLc3vT7h35b2IPMEXGnKPp7l4jQk0FP1q6m32SZm4PdLKbvicOPBTWa/gbUpfjvav5K7xEugfJjszDUdopwaor3pVj9EmnrTCvmXRrguth6xM7POW/I7sFlapi6iqBkFKlkBy2LZqpBNsxulMXt0I7wOpSrJblbbvHXVSIiVuyIiAiIgIiICIiAiIgIiIFLqCLHUHoZz7afyNbKqkstOpRJ/06jZfssTYeAtOhxA4/ifkNoD/AC6wPcHDfiGP4TVdtfJnUwty1Hs+unaX29R7Z9FTwi8D5Rr7EtylvZuDbFUvm6lBUp1TVRKjhBUFREp1VBbTMDSo2Hczd0+kNtbl4XE3OThufpJp7xyM4T8pO5dTZ1YMxz0K98rgEANbtI3cebDvF7eiZMIlc21h8Lh70HFRqeApYeizUigPFrs9atXAcENrlXIbaaXFry3tfC0cOyU6tThplNSjXVEqYeulZ+JxGpCzqdKSEoSVCIMtgGbFr/4xcW6vTz4inhyUZ1RuNSamKgGcgEMBVYG/UA2MyDtP5vg8Nha9GjiSnFY8Rgy0VZyEpq9MmzEBmIBJsyjoJOkbQu8mGyOrmrTqNWU1maiCKQz1KmVaeYA2yqDYgWvaRuAw61XymqlJRqzuTYDwA1dvqj22FyG0sWajFzYXtoBlUAAKqqOgVQqgXOigXMwEYjQRtGmxDY+F6YxvZh1/8iV09jYS+uLqW8KCD8a81svLZcyeX0cW60sBs1eb4iqe5qlOkv3FY/el75zs9PRw1L/e1SofezTQryoMZPP6OP23kbYwgtlw2H9lBD+N5J4PFV6v+Th6fsGET99hOaioZWtUyOcp4uzYXYW2Ki3RKaeBr0R/9d5Fb4YLa2zqS1q/apsbF6NZ3VD0FS6rlv0Oo6c7X51htqYhPQquvkzD+MlqO+u0lUpx2dGBBSoFdWB5qwYag9xkc5OEMd96qzc7+8t+JmO23qp7vdMJqDOxbIFueS3yjyuTYS/R2VUbw8eccpOMK/7ZrdWtOv8AyRbmVK6nGY5L02FqNGoPSGhNZ17uig87k29EyncDYOxKIWrUzVK4sf8AEWZFPeqgBeYvcgnxnXcNtGi+q1FPtEjlKYhk00CgAAAAWAGgAHIAdJVPA157ISREQEREBERAREQEREBERAREQEREBERATC2zsmji6L0K6B6bixU+8EHmCDYgjW4mbED5p3s+TfGYSs3zanXxFHmHWn2xr6LBT2v2gLHuE1LGYLEIf0lCup+vTqA/eE+w5S9MHmAfMXk7Rp8YnDVG/Vv7VMrTZtU/QPuM+vK+w8M/pUKZ8coB+Ewau5+Db9XbyJ/jIS+V12PUP0TLi7EqeqZ9MVtyMP0v7gfymI25tPoPhaB86rsJ+6XF2C/qz6F/uandPRucndA+f02A3dMinu63dO9ruindLybrIPoiBwmju03q/CZ9DdVvVnbk3bQfREyKew0HSBx3C7pH1ZMYTdI906nT2Uo6S+mBUdIHPsJuvbpJvB7Cy9Jta4Yd0rFIQI3B4Ur1Mk6d5UElQEAInsQEREBERAREQEREBERAREQEREBERAREQEREBERAREQPLRlnsQPMsWnsQPLRaexAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQERED/2Q==",
        },
        {
            id: 4,
            product_name: "Product 4",
            price: 9999,
            Image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyUYJ1IbBmZxxfagUI1q9fcUQIaNngn4bGzw&s",
        },
        {
            id: 5,
            product_name: "Product 5",
            price: 9999,
            Image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4aBDqm6zbayKk2PBqgmgdUNba4SFOASf9Rw&s",
        },
        {
            id: 6,
            product_name: "Product 6",
            price: 9999,
            Image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyUYJ1IbBmZxxfagUI1q9fcUQIaNngn4bGzw&s",
        },
        {
            id: 7,
            product_name: "Product 7",
            price: 9999,
            Image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW-ZDo6dn0xY3dzUY7oInTwNNjk6ugbnlp-w&s",
        },
        {
            id: 8,
            product_name: "Product 8",
            price: 9999,
            Image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_vfdD363xX5TBDjMxsti6oM6vhUeuqjlBjQ&s",
        },
    ])

    const [wishlist, setWishlist] = useState([])

    const handleWishlist = (id) => {
        if (wishlist.includes(id)) {
            setWishlist(wishlist.filter(item => item !== id))
        } else {
            setWishlist([...wishlist, id])
        }
    }

    return (
        <Container style={{ marginTop: '20px' }}>
         
            <div className="mb-5">
                <h1 className="text-center">Our Car Collection</h1>
                <p className="text-center">Check out our wide range of Cars Add your favorites to the wishlist or buy them now!</p>
            </div>

    
            <Row>
                {Items.map((elem) => {
                    const isWishlisted = wishlist.includes(elem.id)
                    return (
                        <Col key={elem.id} xs={12} sm={6} md={4} lg={3} className="mb-4">
                            <Card>
                                <Card.Img 
                                    variant='top' 
                                    style={{ height: "200px", width: "80%", objectFit: "contain" }}
                                    src={process.env.PUBLIC_URL + elem.Image} 
                                />
                                <Card.Body>
                                    <Card.Title>{elem.product_name}</Card.Title>
                                    <Card.Text>${elem.price}</Card.Text>
                                    <Card.Text>{elem.description}</Card.Text>

                                    <div className="d-flex justify-content-between">
                                        <Button variant="primary" className="me-2">Buy Now</Button>
                                        <Button
                                            variant={isWishlisted ? "danger" : "outline-secondary"}
                                            onClick={() => handleWishlist(elem.id)}
                                        >
                                            {isWishlisted ? "Remove from Cart" : "Add to cart"}
                                        </Button>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    )
                })}
            </Row>
        </Container>
    )
}

export default Products