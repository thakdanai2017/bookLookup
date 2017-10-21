function SimpleApp(){
    this.echo = () =>{
        return '123'

    }
}
function bookLookup(isbn){
    this.isbnservice = isbn
    this.Search = (isbn) =>{
        var isbn = this.isbnservice(isbn)
        return { 
            bookname:'JavaScript',
            cover:'www.image.com',
            isbn:'1234'}
    }

}
test('Simple mock',()=>{
    var app = new SimpleApp()
    var isbn = '123'

    var result = app.echo(isbn)
    expect(result).toBe('123')

})

test('BookLookup service is amazonservice"(isbn)"',() =>{
    const mockAmazonservice = jest.fn()
    .mockReturnValue({
        title: 'JavaScript',
        image: 'www.image.com',
        isbn:'1234'
    
    })
    var book = new bookLookup(mockAmazonservice)
    var isbn = "1234"
    var bookinfo = book.Search(isbn)
    
    
    expect(mockAmazonservice).toHaveBeenCalled()
    expect(mockAmazonservice).toHaveBeenCalledWith(isbn)
    expect(bookinfo.bookname).toBe('JavaScript')
    expect(bookinfo).toHaveProperty('cover')
    expect(bookinfo.cover).toBe('www.image.com')
    expect(bookinfo.isbn).toBe('1234')
})