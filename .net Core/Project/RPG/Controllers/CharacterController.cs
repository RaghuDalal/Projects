using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;
using RPG.Models;

namespace RPG.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class CharacterController: ControllerBase
    {
        private static List<Character> characters = new List<Character>{
            new Character(),
            new Character{ID = 1,Name= "Sam"}
        };
        [HttpGet("GetAll")]
        public IActionResult Get()
        {
            return Ok(characters);
        }

        [HttpGet("{id}")]

        public  IActionResult GetSingle(int ID)
        {
            return Ok(characters.FirstOrDefault(c=>c.ID==ID));
        }
    }
}